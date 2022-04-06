const router = require("express").Router();

const errorHandling = require("../middlewares/errors");

const auth = require("../routes/auth");
const products = require("../routes/products");
const categories = require("../routes/category");

router.use("/api/users", auth);
router.use("/api/products", products);
router.use("/api/categories", categories);
router.use(errorHandling);

module.exports = router;
