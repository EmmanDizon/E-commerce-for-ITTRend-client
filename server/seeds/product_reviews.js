const reviews = [
  {
    product_id: 1,
    user_id: 1,
    author: "Emman Jay T. Dizon",
    ratings: 5,
    content: "Very Good Quality !",
  },
  {
    product_id: 1,
    user_id: 2,
    author: "Mark Lance Bonifacio",
    ratings: 4,
    content: "Good Quality !",
  },
  {
    product_id: 2,
    user_id: 2,
    author: "Emman Jay T. Dizon",
    ratings: 5,
    content: "The Best !",
  },

  {
    product_id: 2,
    user_id: 2,
    author: "Mark Lance Bonifacio",
    ratings: 3,
    content: "Poor Quality !",
  },
];

exports.seed = function (knex) {
  return knex("product_reviews").insert(
    reviews.map((e) => {
      return {
        product_id: e.product_id,
        user_id: e.user_id,
        author: e.author,
        ratings: e.ratings,
        content: e.content,
      };
    })
  );
};
