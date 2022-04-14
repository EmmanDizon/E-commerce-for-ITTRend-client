exports.up = function (knex) {
  return knex.schema.createTable("product_images", (table) => {
    table.increments("id");
    table.integer("product_id").notNullable();
    table.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_images");
};
