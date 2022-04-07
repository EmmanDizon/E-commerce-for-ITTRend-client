import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (p) => {
  let ratingsArray = p && p.reviews;
  let total = [];
  let length = ratingsArray.length;

  ratingsArray.map((r) => total.push(r.ratings));
  let totalReduced = total.reduce((p, n) => p + n, 0);

  let highest = length * 5;

  let result = (totalReduced * 5) / highest;

  return (
    <div className="text-center pt-1 pb-3">
      <span>
        <StarRating
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="rgb(19,69,149)"
          rating={result}
          editing={false}
        />
        ({p.reviews.length})
      </span>
    </div>
  );
};
