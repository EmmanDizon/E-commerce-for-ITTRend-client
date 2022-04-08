import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import { showAverage } from "../../functions/rating";

const ProductsCard = ({ product }) => {
  const { _id, name, description, images, reviews } = product;

  return (
    <>
      {showAverage(product)}

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

          <Link to="/">
            <ShoppingCartOutlined className="text-success" /> <br /> Add to Cart
          </Link>,
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
