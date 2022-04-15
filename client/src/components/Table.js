import React from "react";
import { Table } from "antd";

const TableComponent = ({ data, columns }) => {
  const cartData = data.map((item) => {
    return {
      key: item._id,
      name: item.name,
      image: item.image,
      price: ` ₱${item.price}`,
      description: item.description,
      quantity: item.quantity,
      stocks: item.stocks,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={cartData}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
    />
  );
};

export default TableComponent;
