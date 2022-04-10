import React, { useEffect, useState } from "react";
import { List, Card, Button, Typography, Image, Tooltip } from "antd";
import { EditFilled, EyeFilled, DeleteFilled } from '@ant-design/icons';
import http from "../../service/http";
import AvarageStarRating from "../others/AverageStarRating";

const { Title, Paragraph, Text } = Typography;

const CardControl = (props) => {
  const { toolTipTitle, isDanger, onClick, icon } = props;

  return (
    <Tooltip placement="top" title={toolTipTitle} arrowPointAtCenter>
      <Button
        style={{ borderRadius: 7, height: 30, width: 30 }}
        type="primary"
        onClick={onClick}
        danger={isDanger}
        icon={icon}
      />
    </Tooltip>
  )
}

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await http.post(`${process.env.REACT_APP_NODE_PORT}/products/get_products`);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ant-card" style={{ height: 'calc(100vh - 120px)', display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 10, padding: 10 }}>
        <div style={{ flex: 1 }}/>
        <Button type="primary" style={{ borderRadius: 10 }}>
          <Text strong style={{ color: "white" }}>Add Product</Text>
        </Button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: 10 }}>
        <List
          dataSource={products}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 4 }}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                style={{ padding: 8 }}
                cover={
                  <Image
                    style={{ objectFit: "cover" }}
                    src={item.images[0].url}
                    height={200}
                  />
                }
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ height: 100 }}>
                    <Title ellipsis={true} level={5}>{item.name}</Title>
                    <Paragraph rows={3} ellipsis={{ rows: 3 }} style={{ color: "gray" }}>{item.description}</Paragraph>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ width: 110, padding: 5 }}>
                      <AvarageStarRating
                        starDimension="17px"
                        starSpacing="1px"
                        starRatedColor="gray"
                        ratings={item}
                      />
                    </div>
                    <div style={{ flex: 1 }}/>
                    <div style={{ display: "flex", gap: 10 }}>
                      <CardControl
                        toolTipTitle="Open Product"
                        isDanger={false}
                        onClick={() => {}}
                        icon={<EyeFilled style={{ fontSize: 22, marginLeft: 5 }}/>}
                      />
                      <CardControl
                        toolTipTitle="Edit Product"
                        isDanger={false}
                        onClick={() => {}}
                        icon={<EditFilled style={{ fontSize: 22, marginLeft: 5 }}/>}
                      />
                      <CardControl
                        toolTipTitle="Delete Product"
                        isDanger={true}
                        onClick={() => {}}
                        icon={<DeleteFilled style={{ fontSize: 22, marginLeft: 5 }}/>}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default Products;