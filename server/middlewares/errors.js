module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = err;

  if (error.code === "22P02") {
    error.message = error.message.split("-")[1];
  }

  if (error.code === "23505") {
    error.message = error.detail.split("=")[1];
  }

  res.status(err.statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};
