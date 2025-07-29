const captainModel = require('../models/captain.model');
const { validationResult } = require("express-validator");
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  // Check if captain already exists
  const isCaptainAlreadyExists = await captainModel.findOne({ email });
  if (isCaptainAlreadyExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  // Hash the password
  const hashPassword = await captainModel.hashPassword(password);

  // ✅ Log full data before sending to service
  const captainData = {
    firstname: fullname?.firstname,
    lastname: fullname?.lastname,
    email,
    password: hashPassword,
    vehicletype: vehicle?.vehicletype,
    color: vehicle?.color,
    plate: vehicle?.plate,
    capacity: vehicle?.capacity,
  };

  // ✅ Check for missing fields before calling service
  for (let key in captainData) {
    if (!captainData[key]) {
      return res.status(400).json({ message: `Missing field: ${key}` });
    }
  }

  // Create captain
  const captain = await captainService.createCaptain(captainData);

  // Generate token
  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

  res.cookie('token', token);

  res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Add token to blacklist
  await blacklistTokenModel.create({ token });

  res.clearCookie('token');
  res.status(200).json({ message: "Logged out successfully" });
}