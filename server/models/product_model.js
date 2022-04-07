const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxlength: [50, "Cannot exceed 100 characters"],
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
    category: {
      type: ObjectId,
      ref: "categories",
    },
    subcategory: [
      {
        type: ObjectId,
        ref: "sub",
      },
    ],
    sold: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        postedBy: {
          type: ObjectId,
          ref: "users",
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
    images: [
      {
        type: Array,
      },
    ],

    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    },
  },

  { timestamps: true }
);

const Products = mongoose.model("products", productSchema);

module.exports = Products;
