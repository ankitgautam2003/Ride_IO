const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BlacklistTokenmodel = require("../model/blacklistToken.model");
const CaptainModel = require("../models/captain.model");

module.exports.authuser = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isblackListed = await BlacklistTokenmodel.findOne({ token: token });

  if (isblackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCapation = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isblackListed = await BlacklistTokenmodel.findOne({ token: token });

  if (isblackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await CaptainModel.findById(decoded.id);
    req.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
