const Product = require("../models/product_model");
const TryCatch = require("../middlewares/handle_try_catch");

exports.createProducts = TryCatch(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});
