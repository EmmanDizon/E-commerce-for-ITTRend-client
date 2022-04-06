require("dotenv").config();
require("./database")();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();

const errorRouteHandling = require("./middlewares/error_routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.use("/", require("./Initialize_routes"));
errorRouteHandling(app);

module.exports = app;
