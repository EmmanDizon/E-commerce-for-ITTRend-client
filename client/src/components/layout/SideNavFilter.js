import React, { useState, useEffect } from "react";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Checkbox, Menu, Slider } from "antd";
import Star from "../forms/Star";
import http from "../../service/http";

const { SubMenu, Item, ItemGroup } = Menu;

const SideNavFilter = ({ price, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [star, setStar] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await http.get(
      `${process.env.REACT_APP_NODE_PORT}/categories/get_categories`
    );

    setCategories(data.category);
  };

  const handleStarClick = () => {};

  return (
    <Menu mode="inline" defaultOpenKeys={["price"]}>
      <SubMenu
        key="price"
        title={
          <span className="h6">
            <DollarOutlined /> Price
          </span>
        }
      >
        <Slider
          tipFormatter={(v) => `₱${v}`}
          range
          value={price}
          onChange={onChange}
          max="50000"
        />
      </SubMenu>

      <SubMenu
        key="category"
        title={
          <span className="h6">
            <DownSquareOutlined /> Categories
          </span>
        }
      >
        <ItemGroup>
          {categories &&
            categories.map((c) => {
              return (
                <Item key={c._id}>
                  <Checkbox key={c._id}>{c.name}</Checkbox>
                </Item>
              );
            })}
        </ItemGroup>
      </SubMenu>

      <SubMenu
        key="ratings"
        title={
          <span className="h6">
            <StarOutlined /> Ratings
          </span>
        }
      >
        <ItemGroup>
          <Item key="star1">
            <Star starClick={handleStarClick} numberOfStars={5} />
          </Item>

          <Item key="star2">
            <Star starClick={handleStarClick} numberOfStars={4} />
          </Item>

          <Item key="star3">
            <Star starClick={handleStarClick} numberOfStars={3} />
          </Item>

          <Item key="star4">
            <Star starClick={handleStarClick} numberOfStars={2} />
          </Item>

          <Item key="star5">
            <Star starClick={handleStarClick} numberOfStars={1} />
          </Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default SideNavFilter;
