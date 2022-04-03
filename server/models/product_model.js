const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxlength: [100, "Cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
    maxlength: [5, "Cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
    trim: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },

  stocks: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [5, "Product stock cannot exceed 5 characters"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
