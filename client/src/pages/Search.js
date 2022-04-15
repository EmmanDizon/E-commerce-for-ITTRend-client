import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductsCard from "../components/cards/ProductsCard";
import Loader from "../components/layout/loader";
import http from "../service/http";
import { Pagination, Col, Row } from "antd";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { text } = useSelector((state) => state.search);

  useEffect(() => {
    fetchProducts(text);
  }, [page]);

  const fetchProducts = async (query) => {
    const { data } = await http.post(
      `${process.env.REACT_APP_NODE_PORT}/products/search/filters?keyword=${query}`,
      {
        page,
      }
    );

    setProducts(data.products);
    setProductsCount(data.productsCount);
    setLoading(false);
  };

  const onPageChange = (e) => {
    setPage(e);
  };

  const totalPage = () => {
    const total = Math.floor(5 / productsCount) * 10;

    if (isNaN(total)) return 10;

    return total;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {products.length > 0 ? (
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
          ) : (
            <h5 className="text-center">No Products Found.</h5>
          )}
        </>
      )}
    </>
  );
};

export default Search;
