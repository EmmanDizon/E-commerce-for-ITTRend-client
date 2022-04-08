const router = require("express").Router();

const {
  createProducts,
  getProducts,
} = require("../controllers/product_controller");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authentication");

router.route("/get_products").post(getProducts);

router
  .route("/create_products")
  .post(isAuthenticatedUser, authorizeRoles(), createProducts);

module.exports = router;
