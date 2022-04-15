import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductListItems from "./ProductListItems";
import CommentSection from "../layout/CommentSection";
import { Pagination, Image } from "antd";
import { addToCart as addToCartAction } from "../../redux/actions/cart_action";
import { useDispatch } from "react-redux";
const { Meta } = Card;

const ProductCard = ({ product, reviews }) => {
  const { name, description, images } = product;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(product, 1, true));
  };
  return (
    <>
      <div className="col-md-6">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {images &&
            images.map((image) => <Image src={image.url} key={image._id} />)}
        </Carousel>
        <div>
          <CommentSection reviews={reviews} />
          <Pagination
            style={{ textAlign: "center" }}
            defaultCurrent={1}
            total={10}
          />
        </div>
      </div>

      <div className="col-md-6">
        <h1 className="bg-danger text-white p-3">{name}</h1>
        <Card
          actions={[
            <>
              <a onClick={addToCart}>
                <ShoppingCartOutlined className="text-info" /> <br /> ADD TO
                CART
              </a>
            </>,
            <Link to="/">
              <HeartOutlined className="text-info" /> <br /> ADD TO WISHLIST
            </Link>,
          ]}
        >
          <Meta description={description} />
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
