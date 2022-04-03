import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/user_action";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = ({ key }) => {
    setCurrent(key);
  };

  const logout = () => {
    auth.signOut();
    dispatch(logoutUser());

    navigate("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      {user && (
        <SubMenu
          key="username"
          icon={<SettingOutlined />}
          title={user !== null ? user.email.split("@")[0] : "Username"}
          style={{ marginLeft: "auto" }}
        >
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </SubMenu>
      )}

      {!user && (
        <Menu.Item
          key="login"
          icon={<UserOutlined />}
          style={{ marginLeft: "auto" }}
        >
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
      {!user && (
        <Menu.Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
