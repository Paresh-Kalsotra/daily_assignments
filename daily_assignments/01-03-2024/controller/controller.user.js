const user = require("../models/userModel.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");

const uri =
  "mongodb+srv://pareshkalsotra:pareshkanu@cluster0.oepwuys.mongodb.net/library";

async function loadPage(req, res) {
  res.status(200).sendFile(path.join(__dirname, "../login_page/index.html"));
}

async function signupUser(req, res) {
  try {
    await mongoose.connect(uri); // connecting to mongodb
    let existedUser = await user.find({ email: req.body.email });
    if (existedUser.length >= 1) {
      return res.status(422).json("user already exits"); //send login file here
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creating a new user
    const newUser = new user({
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json("Signup successful");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err._message);
  }
}

async function loginUser(req, res) {
  await mongoose.connect(uri); // connecting to mongodb

  let logUser = await user.find({ email: req.body.email });

  //checking for null //can check for only one or multiple user with same email
  if (logUser.length !== 1) {
    return res.status(401).json(" Authorisation failed"); //un authorized
  }

  bcrypt.compare(req.body.password, logUser[0].password, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Server Error");
    }
    if (!result) {
      return res.status(401).json(" Authorisation failed");
    }
    //jwt token generation
    const token = jwt.sign({ email: logUser[0].email }, process.env.jwt_key, {
      expiresIn: "1h",
    });
    res.status(200).json("login sucessful" + token); //send lib file
  });
}

module.exports = { signupUser, loginUser, loadPage };
