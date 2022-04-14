const _ = require("lodash");
const { generateJwtToken } = require("../models/user_model");

const sendToken = (user, statusCode, res) => {
  const token = generateJwtToken(user);
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  const result = _.pick(user, ["firstname", "lastname", "email", "role"]);

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user: result,
  });
};

module.exports = sendToken;
