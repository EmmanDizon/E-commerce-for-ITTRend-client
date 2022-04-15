const knex = require("../common/database");

const create = async (products) => {
  return await knex("products").insert(products, "*");
};

const findById = async (id) => {
  return await knex("products").where("id", id).first();
};

const findAll = async (skip, resPerPage) => {
  return await knex("products AS p")
    .join("categories as c", "c.id", "p.category_id")
    .select(
      "p.id",
      "p.name",
      "p.description",
      "p.brand",
      "c.name AS category",
      "p.sold",
      "p.price",
      "p.ratings",
      "p.stocks"
    )
    .offset(skip)
    .limit(resPerPage);
};

const totalCount = async () => {
  const { count } = await knex.count("id").from("products").first();

  return parseInt(count);
};

const getReviews = async (product_id) => {
  const result = await knex("product_reviews")
    .where("product_id", product_id)
    .select("author", "content", "ratings", "updated_at AS date_posted");

  return result;
};

const getImages = async (product_id) => {
  return await knex("product_images")
    .where("product_id", product_id)
    .select("url");
};

const searchByWord = async (keyword, skip, resPerPage) => {
  const result = await knex("products AS p")
    .join("categories as c", "c.id", "p.category_id")

    .select(
      "p.id",
      "p.name",
      "p.description",
      "p.brand",
      "c.name AS category",
      "p.sold",
      "p.price",
      "p.ratings",
      "p.stocks"
    )
    .where("p.name", "ILIKE", `%${keyword}%`)
    .offset(skip)
    .limit(resPerPage);

  return result;
};

module.exports = {
  create,
  findById,
  findAll,
  totalCount,
  getReviews,
  getImages,
  searchByWord,
};
