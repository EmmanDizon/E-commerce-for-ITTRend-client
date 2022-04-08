import React from "react";
import StarRating from "react-star-ratings";

const Rating = ({ starDimension, starSpacing, starRatedColor, rating }) => {
  return (
    <span>
      <StarRating
        starDimension={starDimension}
        starSpacing={starSpacing}
        starRatedColor={starRatedColor} //"rgb(19,69,149)"
        rating={rating}
        editing={false}
      />
    </span>
  );
};

export default Rating;
