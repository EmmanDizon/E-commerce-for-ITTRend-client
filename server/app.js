require("dotenv").config();
require("./database")();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();

const products = require("./routes/products");
const auth = require("./routes/auth");

const errorHandling = require("./middlewares/errors");
const errorRouteHandling = require("./middlewares/error_routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/products", products);
app.use("/api/users", auth);

app.use(errorHandling);
errorRouteHandling(app);

module.exports = app;
