import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import AvarageStarRating from "../others/AverageStarRating";
import { addToCart as addToCartAction } from "../../redux/actions/cart_action";
import { useDispatch } from "react-redux";

const ProductsCard = ({ product }) => {
  const { _id, name, description, images } = product;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(product));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AvarageStarRating
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="rgb(19,69,149)"
          ratings={product}
        />
      </div>
      <Card
        cover={
          <img
            src={images[0].url}
            className="p-2"
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          <Link to={`/product/${_id}`}>
            <EyeOutlined className="text-info" /> <br /> View Product
          </Link>,

          <a onClick={addToCart}>
            <ShoppingCartOutlined className="text-success" /> <br /> Add to Cart
          </a>,
        ]}
      >
        <Meta
          title={name}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductsCard;
