import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCog, faBell, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Badge, Dropdown, Button, List, Avatar, Input, Breadcrumb } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../redux/actions/user_action";

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

const Header = ({ subName, onPress }) => {
  const dispatch = useDispatch();

  const data = [
    {
      avatar: <Avatar shape="square"><FontAwesomeIcon icon={faSignOut} color="gray"/></Avatar>,
      title: "Logout",
      description: "Signout Admin Account",
      onPress: () => dispatch(logout())
    }
  ];
  
  const menu = () => (
    <List
      min-width="100%"
      className="header-notifications-dropdown"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ cursor: "pointer" }} onClick={item.onPress}>
          <List.Item.Meta
            avatar={<Avatar shape="square" src={item.avatar} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Row gutter={[24, 0]}>

        {/* PAGE TITLE AND DESCRIPTION */}
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {(subName.charAt(0).toUpperCase() + subName.slice(1)).replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>

        {/* NAVIGATION AND MENUS */}
        <Col span={24} md={18} className="header-control">

          {/* Notification */}
          <Badge size="small" count={4}>
            <FontAwesomeIcon icon={faBell} />
          </Badge>

          {/* Settings */}
          <Button type="link">
            <FontAwesomeIcon icon={faCog} />
          </Button>

          {/* Hamburger Menu [Mobile] */}
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>

          {/* User */}
          <div className="btn-sign-in" style={{ cursor: "pointer" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <div
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </Dropdown>
          </div>

          {/* Search */}
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
