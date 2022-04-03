const mongoose = require("mongoose");
const logger = require("./common/logger");

const database = () => {
  mongoose.set("runValidators", true); // here is your global setting
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      logger.info(`Connected to mongoDB with host: ${res.connection.host}`);
    })
    .catch((error) => console.log(error));
};

module.exports = database;
