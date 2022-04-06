const Category = require("../models/category_model");
const TryCatch = require("../middlewares/handle_try_catch");
const ErrorHandler = require("../utils/error_handler");

exports.getCategories = TryCatch(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(200).json({
    success: true,
    category,
  });
});

exports.createCategories = TryCatch(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(200).json({
    success: true,
    category,
  });
});

exports.updateCategory = TryCatch(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) return next(new ErrorHandler("Category not found.", 404));

  category = await Category.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    category,
  });
});

exports.deleteCategory = TryCatch(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) return next(new ErrorHandler("Category not found.", 404));

  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category deleted",
  });
});
