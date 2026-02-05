const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers;
  if (!authHeader["authorization"]) {
    res.status(401).json({
      success: false,
      message: "Access Denied",
    });
    return;
  }
  const token = authHeader && authHeader["authorization"].split(" ")[1];
  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access Denied",
    });
    return;
  }

  //decode the token
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodeToken);
    req.userInfo = decodeToken;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Access Denied",
    });
  }
};

module.exports = authMiddleWare;
