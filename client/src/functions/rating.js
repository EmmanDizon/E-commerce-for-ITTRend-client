const showAverage = (p) => {
  let ratingsArray = p && p.reviews;
  let total = [];
  let length = ratingsArray.length;

  ratingsArray.map((r) => total.push(r.ratings));
  let totalReduced = total.reduce((p, n) => p + n, 0);

  let highest = length * 5;

  return (totalReduced * 5) / highest;
};

export {
  showAverage,
}