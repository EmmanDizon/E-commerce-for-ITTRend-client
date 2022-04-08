import React from "react";
import { Tag } from "antd";

const ProductListItems = ({ product }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price
        <span className="label label-default label-pill pull-xs-right">
          ₱{product.price}
        </span>
      </li>

      <li className="list-group-item">
        Brand
        <span className="label label-default label-pill pull-xs-right">
          {product.brand}
        </span>
      </li>

      <li className="list-group-item">
        Stocks
        <span className="label label-default label-pill pull-xs-right">
          {product.stocks}
        </span>
      </li>

      <li className="list-group-item">
        Sold
        <span className="label label-default label-pill pull-xs-right">
          {product.sold}
        </span>
      </li>

      <li className="list-group-item">
        Shipping
        <span className="label label-default label-pill pull-xs-right">
          {product.stocks > 0 ? (
            <Tag color="green" style={{ marginRight: "auto" }}>
              Available
            </Tag>
          ) : (
            <Tag color="magenta" style={{ marginRight: "auto" }}>
              Not Available
            </Tag>
          )}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
