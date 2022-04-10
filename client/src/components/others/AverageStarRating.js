import React from "react";
import StarRating from "react-star-ratings";
import { showAverage } from "../../functions/rating"

const AvarageStarRating = (props) => {
  const { ratings, ...otherProps } = props;

  return (
    <StarRating
      rating={showAverage(ratings)}
      {...otherProps}
    />
  );
};

export default AvarageStarRating;
