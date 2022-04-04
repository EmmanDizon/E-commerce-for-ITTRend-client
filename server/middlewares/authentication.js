const TryCatch = require("./handle_try_catch");
const ErrorHandler = require("../utils/error_handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

exports.isAuthenticatedUser = TryCatch(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to access this resource.", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});

exports.authorizeRoles = () => {
  return (req, res, next) => {
    if (req.user.role !== "admin") {
      return next(new ErrorHandler("Access Denied", 403));
    }

    next();
  };
};
