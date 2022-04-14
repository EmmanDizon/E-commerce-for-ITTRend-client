const config = require("../knexfile");
const logger = require("./logger");
const knex = require("knex")(config[process.env.NODE_ENV]);

knex
  .queryBuilder()
  .select(knex.raw("version()"))
  .then(() => {
    logger.info("DB Connected!");
  })
  .catch((error) => {
    console.error("Can't connect to DB!");
    throw error;
  });

if (process.env.NODE_ENV !== "production") {
  knex.on("error", (error) => {
    logger.info("Error", error);
  });

  knex.on("query", (query) => {
    if (process.env.NODE_ENV === "development") logger.info("Query", query);
  });
}

module.exports = knex;
