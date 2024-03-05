const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.jwt_key); // .decode only decode but doesn't verify
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json("auth failed");
  }
};
