const _ = require("lodash");

const sendToken = (user, statusCode, res) => {
  const token = user.generateJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  const result = _.pick(user, [
    "firstname",
    "lastname",
    "email",
    "role",
    "cart",
    "wishList",
  ]);

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user: result,
  });
};

module.exports = sendToken;
