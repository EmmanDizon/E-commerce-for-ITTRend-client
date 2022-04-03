require("dotenv").config();
require("./database")();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const products = require("./routes/product");

const errorHandling = require("./middlewares/errors");
const errorRouteHandling = require("./middlewares/error_routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products", products);
app.use(errorHandling);
errorRouteHandling(app);

module.exports = app;
