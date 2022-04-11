import React, { useState } from "react";
import { Menu, Badge } from "antd";
import { Link } from "react-router-dom";
import Search from "../../components/forms/Search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user_action";

import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
  OrderedListOutlined,
  LineChartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const PublicHeader = () => {
  const [current, setCurrent] = useState("home");
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const hasUser = () => {
    if (typeof user !== "undefined") {
      return Object.keys(user).length === 0 ? false : true;
    }
    return false;
  };

  const username = () => {
    if (hasUser()) {
      return user.firstname.split(" ")[0] + " " + user.lastname;
    }
  };

  const handleClick = ({ key }) => {
    setCurrent(key);
  };

  const onClickHandler = ({ key }) => {
    key = key === "logout" ? dispatch(logout()) : "";
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>

      <Menu.Item
        key="cart"
        icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
      >
        <Link to="/cart">
          <Badge
            count={cartItems.length}
            offset={[-10, -20]}
            size="small"
          ></Badge>
        </Link>
      </Menu.Item>

      <Menu.Item key="search" style={{ marginLeft: "auto" }}>
        <Search />
      </Menu.Item>

      {hasUser() && (
        <SubMenu key="username" icon={<SettingOutlined />} title={username()}>
          <Menu.Item
            key="dashboard"
            icon={<LineChartOutlined />}
            hidden={user.role === "admin" ? false : true}
            onClick={onClickHandler}
          >
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <Menu.Item
            key="orders"
            icon={<OrderedListOutlined />}
            onClick={onClickHandler}
          >
            My Orders
          </Menu.Item>
          <Menu.Item
            key="profile"
            icon={<UserOutlined />}
            onClick={onClickHandler}
          >
            My Profile
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={onClickHandler}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      )}

      {!hasUser() && (
        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default PublicHeader;
