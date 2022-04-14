const productData = [
  {
    name: "Microsoft Super Enhance Laptop",
    price: 60000,
    description: "Durable Laptop",
    ratings: 0,
    stocks: 10,
    sold: 0,
    category_id: 1,
    brand: "Microsoft",
  },
  {
    name: "Microsoft Laptop II",
    price: 80000,
    description: "Durable Microsoft Laptop",
    ratings: 0,
    stocks: 7,
    sold: 0,
    category_id: 1,
    brand: "Microsoft",
  },
];

exports.seed = function (knex) {
  return knex("products").insert(
    productData.map((e) => {
      return {
        name: e.name,
        price: e.price,
        description: e.description,
        ratings: e.ratings,
        stocks: e.stocks,
        sold: e.sold,
        category_id: e.category_id,
        brand: e.brand,
      };
    })
  );
};
