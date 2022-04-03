module.exports = function (app) {
  app.use(function (req, res, next) {
    let err = new Error("No routes found");

    next(err);
  });

  app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
    });
  });
};
