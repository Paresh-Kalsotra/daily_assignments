const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");

async function loadPage(req, res) {
  res.status(200).sendFile(path.join(__dirname, "../login_page/login.html"));
}

async function signupUser(req, res) {
  try {
    let existedUser = await user.find({ email: req.body.email });
    if (existedUser.length >= 1) {
      return res.status(422).json("user already exits");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creating a new user
    const newUser = new user({
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json("Signup successful, Please Login!");
  } catch (err) {
    console.log(req.body);
    return res.status(500).json(err._message);
  }
}

async function loginUser(req, res) {
  let logUser = await user.find({ email: req.body.email });

  //checking for null //can check for only one or multiple user with same email
  if (logUser.length !== 1) {
    return res.status(404).json("User doesn't exist, Please Signup!");
  }

  bcrypt.compare(req.body.password, logUser[0].password, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json("Server Error");
    }
    if (!result) {
      return res.status(401).json("Incorrect email or password"); //un authorized
    }
    //jwt token generation
    const token = jwt.sign({ email: logUser[0].email }, process.env.jwt_key, {
      expiresIn: "1h",
    });
    res.cookie("userToken", token);

    res.redirect(301, "../libraryManager"); //login success
  });
}

module.exports = { signupUser, loginUser, loadPage };
