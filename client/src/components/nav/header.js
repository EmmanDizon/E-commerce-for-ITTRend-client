import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user_action";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const { user, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const hasUser = () => {
    if (typeof user !== "undefined") {
      return Object.keys(user).length === 0 ? false : true;
    }
    return false;
  };

  const handleClick = ({ key }) => {
    setCurrent(key);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      {hasUser() && (
        <SubMenu
          key="username"
          icon={<SettingOutlined />}
          title={"Username"}
          style={{ marginLeft: "auto" }}
        >
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={logoutHandler}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      )}

      {!hasUser() && (
        <Menu.Item
          key="login"
          icon={<UserOutlined />}
          style={{ marginLeft: "auto" }}
        >
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
      {!hasUser() && (
        <Menu.Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
