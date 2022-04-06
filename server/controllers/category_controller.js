const Category = require("../models/category_model");
const TryCatch = require("../middlewares/handle_try_catch");
const ErrorHandler = require("../utils/error_handler");

exports.getCategories = TryCatch(async (req, res, next) => {
  const category = await Category.find().sort({ createdAt: -1 }); // SELECT * FROM categories ORDER BY createdAt DESC

  res.status(200).json({
    success: true,
    category,
  });
});

exports.getSingleCategory = TryCatch(async (req, res, next) => {
  const category = await Category.findById(req.params.id); // SELECT * FROM categories WHERE Id = ?

  if (!category) return next(new ErrorHandler("Category not found.", 404));

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
