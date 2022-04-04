const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email"],
      validate: [validator.isEmail, "Please enter valid email address"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    role: {
      type: String,
      default: "user",
    },

    cart: {
      type: Array,
      default: [],
    },

    address: String,
    wishList: [
      {
        type: ObjectId,
        ref: "products",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ id: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model("users", userSchema);

module.exports = Users;
