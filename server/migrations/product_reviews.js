exports.up = function (knex) {
  return knex.schema.createTable("product_reviews", (table) => {
    table.increments("id");
    table.integer("product_id").notNullable();
    table.string("user_id").notNullable();
    table.string("author").notNullable();
    table.string("content").notNullable();
    table.integer("ratings").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_reviews");
};
