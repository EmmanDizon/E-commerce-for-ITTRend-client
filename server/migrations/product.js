exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("brand").notNullable();
    table.integer("category_id").notNullable();
    table.integer("sold").notNullable().defaultTo(0);
    table.float("price").notNullable();
    table.float("ratings").defaultTo(0);
    table.integer("stocks").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
