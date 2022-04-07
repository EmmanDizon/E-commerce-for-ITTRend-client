import React, { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import http from "../../service/http";
import Loader from "../../components/layout/loader";
import { Row, Col, Empty } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await http.get(
      `${process.env.REACT_APP_NODE_PORT}/products/get_products`
    );

    setProducts(data.product);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row align="center">
            {products.length > 0 ? (
              <>
                {products.map((product) => {
                  return (
                    <Col
                      span={6}
                      xs={24}
                      xl={8}
                      key={product._id}
                      className="p-5"
                    >
                      <ProductCard product={product} />
                    </Col>
                  );
                })}
              </>
            ) : (
              <Empty className="p-5" />
            )}
          </Row>
        </>
      )}
    </div>
  );
};

export default HomePage;
