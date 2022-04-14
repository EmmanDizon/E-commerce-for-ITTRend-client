import React from "react";
import StarRating from "react-star-ratings";
import { showAverage } from "../../functions/rating";

const AvarageStarRating = (props) => {
  const { product, ...otherProps } = props;

  return <StarRating rating={product.ratings} {...otherProps} />;
};

export default AvarageStarRating;
