const Product = require("../models/product_model");
const TryCatch = require("../middlewares/handle_try_catch");
const ErrorHandler = require("../utils/error_handler");

exports.createProducts = TryCatch(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getProducts = TryCatch(async (req, res) => {
  const { page } = req.body;

  const resPerPage = 5;
  const currentPage = page || 1;
  const skip = (currentPage - 1) * resPerPage;

  const getProducts = await Product.findAll(skip, resPerPage);
  const productsCount = await Product.totalCount();

  const products = await Promise.all(
    getProducts.map(async (product) => {
      return {
        ...product,
        images: JSON.stringify(await Product.getImages(product.id)),
      };
    })
  );

  res.status(200).json({
    success: true,
    productsCount,
    products,
  });
});

exports.getProduct = TryCatch(async (req, res) => {
  const getProduct = await Product.findById(req.params.id);

  if (!getProduct)
    return next(new ErrorHandler("Product not found with the given Id.", 401));

  const productReviews = await Product.getReviews(req.params.id);

  const product = {
    ...getProduct,
    images: await Product.getImages(getProduct.id),
  };

  res.status(200).json({
    success: true,
    product,
    reviews: productReviews,
  });
});
