const knex = require("../common/database");

const findAll = async () => {
  return await knex("categories").select("id", "name");
};

module.exports = {
  findAll,
};
