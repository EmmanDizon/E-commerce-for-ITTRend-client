const Product = require("../models/product_model");

exports.handleQuery = async (res, keyword) => {
  const products = await Product.find({
    $or: [
      { name: { $regex: `${keyword}`, $options: "i" } },
      {
        description: {
          $regex: `${keyword}`,
          $options: "i",
        },
      },
    ],
  }).populate("category");

  res.json(products);
};

exports.handlePrice = async (res, price) => {
  let fromPrice,
    toPrice = price[(0, 1)];

  const products = await Product.find({
    price: {
      $gte: fromPrice,
      $lte: toPrice,
    },
  }).populate("category");

  res.json(products);
};
