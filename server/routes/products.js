const router = require("express").Router();

const { createProducts } = require("../controllers/product_controller");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authentication");

router
  .route("/create_products")
  .post(isAuthenticatedUser, authorizeRoles(), createProducts); // meaning, only authenticated user (logged in) and admin can only create products.

module.exports = router;
