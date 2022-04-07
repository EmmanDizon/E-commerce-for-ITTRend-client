import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (p) => {
  let ratingsArray = p && p.reviews;
  let total = [];
  let length = ratingsArray.length;
  // console.log("length", length);

  ratingsArray.map((r) => total.push(r.ratings));
  let totalReduced = total.reduce((p, n) => p + n, 0);
  // console.log("totalReduced", totalReduced);

  let highest = length * 5;
  // console.log("highest", highest);

  let result = (totalReduced * 5) / highest;
  // console.log("result", result);

  console.log("XXXXXXXXX", result);
  return (
    <div className="text-center pt-1 pb-3">
      <span>
        <StarRating
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="blue"
          rating={result}
          editing={false}
        />{" "}
        ({p.reviews.length})
      </span>
    </div>
  );
};
