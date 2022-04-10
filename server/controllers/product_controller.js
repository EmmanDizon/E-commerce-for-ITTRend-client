const Product = require("../models/product_model");
const TryCatch = require("../middlewares/handle_try_catch");
const ErrorHandler = require("../utils/error_handler");
const { handleQuery, handlePrice } = require("../common/functions");

exports.createProducts = TryCatch(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getProducts = TryCatch(async (req, res, next) => {
  const { page } = req.body;

  const resPerPage = 5;
  const currentPage = page || 1;
  const skip = (currentPage - 1) * resPerPage;

  const products = await Product.find().skip(skip).limit(resPerPage);
  const productsCount = await Product.countDocuments();

  res.status(200).json({
    success: true,
    products,
    productsCount,
  });
});

exports.getProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    success: true,
    product,
    reviews: product.reviews,
  });
});

exports.searchAndFilter = TryCatch(async (req, res, next) => {
  const { keyword, price } = req.query;

  if (keyword) {
    await handleQuery(res, keyword);
  }

  if (price) {
    await handlePrice(res, price);
  }
});
