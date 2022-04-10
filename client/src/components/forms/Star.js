import React from "react";
import StarRating from "react-star-ratings";

const Star = ({ starClick, numberOfStars }) => {
  return (
    <>
      <StarRating
        changeRating={starClick(numberOfStars)}
        numberOfStars={numberOfStars}
        starDimension="20px"
        starSpacing="2px"
        starHoverColor="rgb(19,69,149)"
        starEmptyColor="rgb(19,69,149)"
        starRatedColor="rgb(19,69,149)"
        rating={numberOfStars}
      />

      <br />
    </>
  );
};

export default Star;
