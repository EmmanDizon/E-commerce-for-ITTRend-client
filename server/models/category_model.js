const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Minimum of 3 characters."],
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
