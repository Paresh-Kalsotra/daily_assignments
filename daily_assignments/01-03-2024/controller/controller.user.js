const userModel = require("../models/userModel.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const uri =
  "mongodb+srv://pareshkalsotra:pareshkanu@cluster0.oepwuys.mongodb.net/library";

async function loadPage(req, res) {
  // res.status(200).sendFile(path.join(__dirname, "../login_page/index.html"));
  res.status(200).json("index.html");
}

async function signupUser(req, res) {
  await mongoose.connect(uri); // connecting to mongodb
  let signUser = await user.find({ email: req.body.email });
  if (signUser.length >= 1) {
    return res.status(422).json("user already exit"); //send login file here
  }

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err.message);
    } else {
      const user = userModel({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          return res.status(201).json("signup successful"); //send lib file
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err.message);
        });
    }
  });
}

async function loginUser(req, res) {
  await mongoose.connect(uri); // connecting to mongodb

  let logUser = await user.findOne({ email: req.body.email });
  if (logUser.length <= 1) {
    return res.status(401).json(" Authorisation failed"); //un authorized
  }
  bcrypt.compare(req.body.password, logUser[0].password, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(401).json(" Authorisation failed");
    }
    if (result) {
      //jwt token generation
      const token = jwt.sign({ email: logUser[0].email }, process.env.jwt_key, {
        expiresIn: "1h",
      });
      res.status(200).json("login sucessful"); //send lib file
    }
  });
}

module.exports = { signupUser, loginUser, loadPage };
