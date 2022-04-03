const router = require("express").Router();

const { createProducts } = require("../controller/product_controller");

router.route("/create_products").post(createProducts);

module.exports = router;
