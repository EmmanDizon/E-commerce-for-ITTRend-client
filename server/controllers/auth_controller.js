const TryCatch = require("../middlewares/handle_try_catch");
const User = require("../models/user_model");
const ErrorHandler = require("../utils/error_handler");
const sendToken = require("../utils/jwt_token");
const bcrypt = require("bcrypt");

exports.registerUser = TryCatch(async (req, res, next) => {
  let user = req.body;
  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);

  const data = await User.create(req.body);

  res.status(201).json({
    success: true,
    data,
  });
});

exports.loginUser = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne("email", email, "*");

  if (!user) return next(new ErrorHandler("Invalid email or password", 401));

  const isPasswordMatched = await User.comparePassword(password, user.password);

  if (!isPasswordMatched)
    return next(new ErrorHandler("Invalid email or password", 401));

  sendToken(user, 200, res);
});

exports.logoutUser = TryCatch(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});
