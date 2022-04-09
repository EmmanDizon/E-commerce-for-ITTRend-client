import React, { useEffect, useState } from "react";
import ProductsCard from "../components/cards/ProductsCard";
import http from "../service/http";
import Loader from "../components/layout/loader";
import { Row, Col, Pagination } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsCount, setProductsCount] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const { data } = await http.post(
      `${process.env.REACT_APP_NODE_PORT}/products/get_products`,
      { page }
    );

    setProducts(data.products);
    setProductsCount(data.productsCount);

    setLoading(false);
  };

  const onPageChange = (e) => {
    setPage(e);
  };

  const totalPage = () => {
    const total = (productsCount / 5) * 10;

    if (isNaN(total)) return 10;
    return total;
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <Row align="center">
              {products.map((product) => {
                return (
                  <Col
                    span={6}
                    xs={24}
                    xl={8}
                    key={product._id}
                    className="p-5"
                  >
                    <ProductsCard product={product} />
                  </Col>
                );
              })}
            </Row>
          </div>
          <Pagination
            style={{ textAlign: "center" }}
            defaultCurrent={page}
            onChange={onPageChange}
            total={totalPage()}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
