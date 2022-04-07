const router = require("express").Router();

const {
  createCategories,
  updateCategory,
  getCategories,
  deleteCategory,
  getSingleCategory,
} = require("../controllers/category_controller");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authentication");

router
  .route("/create_categories")
  .post(isAuthenticatedUser, authorizeRoles(), createCategories);

router.route("/get_categories").get(isAuthenticatedUser, getCategories);
router.route("/get_category/:id").get(isAuthenticatedUser, getSingleCategory);

router
  .route("/update_category")
  .put(isAuthenticatedUser, authorizeRoles(), updateCategory);

router.route("/delete_category").delete(isAuthenticatedUser, deleteCategory);

module.exports = router;
