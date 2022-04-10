import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const AddToCart = () => {
  const { cart, auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <Row>
        <h4>Cart</h4>
      </Row>

      <Row>
        {!cart.cartItems.length ? (
          <h4>
            No products in cart.<Link to="/"> Continue Shopping</Link>
          </h4>
        ) : (
          <>
            <Col xs={24} xl={8}>
              <h4>Left</h4>
            </Col>
            <Col xs={24} xl={4}>
              <h4>Order Summary</h4>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default AddToCart;
