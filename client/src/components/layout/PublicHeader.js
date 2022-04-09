import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "../../App.css";

const PublicHeader = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = ({ key }) => {
    setCurrent(key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>

      <Menu.Item
        key="login"
        icon={<LoginOutlined />}
        style={{ marginLeft: "auto" }}
      >
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default PublicHeader;
