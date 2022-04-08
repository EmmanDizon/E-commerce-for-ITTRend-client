import React from "react";
import { Comment, List } from "antd";
import Rating from "./StarRating";

const CommentSection = ({ reviews }) => {
  const formatDate = (date) => {
    var newDate = new Date(date);

    return newDate.toISOString().substring(0, 10);
  };

  reviews.forEach((element) => {
    element.author = (
      <>
        <span>{element.author} </span>

        <Rating
          starDimension="15px"
          starSpacing="2px"
          starRatedColor="rgb(19,69,149)"
          rating={element.ratings}
        />
      </>
    );
  });

  reviews.forEach((element) => {
    element.avatar = "https://joeschmoe.io/api/v1/random";
  });

  reviews.forEach((element) => {
    element.datetime = formatDate(element.datetime);
  });

  return (
    <List
      className="comment-list"
      header={`${reviews.length} replies`}
      itemLayout="horizontal"
      dataSource={reviews}
      renderItem={(item) => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default CommentSection;
