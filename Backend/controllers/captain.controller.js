const CaptainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../model/blacklistToken.model.js");

exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    email,
    password,
    fullname: { firstname, lastname },
    vehicle: { color, plate, capacity, vehicleType },
  } = req.body;

  const isCaptainExist = await CaptainModel.findOne({ email });
  if (isCaptainExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await CaptainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    color,
    plate,
    capacity,
    vehicleType,
  });

  const token = await captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await CaptainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = await captain.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captain });
};

module.exports.getCapationProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");

  res.status(200).json({ message: "Logged out successfully" });
};
