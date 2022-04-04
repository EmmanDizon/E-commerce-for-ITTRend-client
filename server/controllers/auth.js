const TryCatch = require("../middlewares/handle_try_catch");
const User = require("../models/user_model");
const ErrorHandler = require("../utils/error_handler");
const sendToken = require("../utils/jwt_token");

exports.registerUser = TryCatch(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    user,
  });
});

exports.loginUser = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid email or password", 401));

  const isPasswordMatched = await user.comparePassword(password);

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
