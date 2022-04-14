const knex = require("../common/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async (user) => {
  return await knex("users").insert(user, "*");
};

const findById = async (id) => {
  return await knex("users").where("id", id).first();
};

const findOne = async (column, value, selectedValues) => {
  return await knex("users")
    .where(column, value)
    .first()
    .select(selectedValues);
};

const comparePassword = async function (req_password, hash_password) {
  return await bcrypt.compare(req_password, hash_password);
};

const generateJwtToken = function (user) {
  return jwt.sign(
    { id: user.id, name: `${user.firstname} ${user.lastname}` },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    }
  );
};

module.exports = {
  create,
  findById,
  findOne,
  comparePassword,
  generateJwtToken,
};
