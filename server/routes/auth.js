const router = require("express").Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth_controller");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

module.exports = router;
