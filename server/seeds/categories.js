const categoriesData = [
  {
    name: "Laptop",
  },
  {
    name: "Desktop",
  },
  {
    name: "System Unit",
  },
];

exports.seed = function (knex) {
  return knex("categories").insert(
    categoriesData.map((e) => {
      return {
        name: e.name,
      };
    })
  );
};
