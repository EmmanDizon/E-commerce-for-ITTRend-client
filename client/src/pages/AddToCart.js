import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, Card, Image, InputNumber } from "antd";
import { ShoppingOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Table";
import { removeToCart, onChangeCart } from "../redux/actions/cart_action";

const AddToCart = () => {
  const { cart, auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (none, data) => <Image src={data.image} height={80} />,
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (none, data) => (
        <InputNumber
          min={1}
          max={data.stocks}
          defaultValue={data.quantity}
          onChange={(quantity) => onChange(quantity, data.key)}
        />
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (none, data) => (
        <Button
          icon={<DeleteOutlined style={{ color: "red" }} />}
          type="text"
          onClick={() => onRemoveCart(data.key)}
        />
      ),
    },
  ];

  const onRemoveCart = (key) => {
    dispatch(removeToCart(key));
  };

  const onChange = (quantity, id) => {
    dispatch(onChangeCart(quantity, id));
  };

  const getTotal = () => {
    return cart.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const checkOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="container-fluid p-3">
      <Row>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
          <Table data={cart.cartItems} columns={columns} />
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 6 }}
          offset={5}
        >
          <Card
            style={{
              borderRadius: "20px",
              width: "350px",
            }}
          >
            <h4>Order summary</h4>
            <hr />
            {cart.cartItems.map((c) => {
              return (
                <div key={c._id}>
                  <p>
                    {c.name} × {c.quantity} = ₱{c.price * c.quantity}
                  </p>
                </div>
              );
            })}
            <hr />
            Total: <b>₱{getTotal()}</b>
            <hr />
            <Button
              block
              onClick={checkOut}
              type="primary"
              shape="round"
              disabled={!cart.cartItems.length}
              icon={<ShoppingOutlined />}
            >
              Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddToCart;
