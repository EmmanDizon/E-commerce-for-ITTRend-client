import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsCard from "../components/cards/ProductsCard";
import Loader from "../components/layout/loader";
import http from "../service/http";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { text } = useSelector((state) => state.search);
  useEffect(() => {
    fetchProducts(text);
  }, []);

  const fetchProducts = async (query) => {
    const { data: products } = await http.post(
      `${process.env.REACT_APP_NODE_PORT}/products/search/filters?keyword=${query}`
    );

    setProducts(products);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">test</div>

        <div className="col-md-9">
          {loading ? <Loader /> : <h4> PRODUCTS </h4>}

          {products.length < 1 && <p>No products found</p>}

          <div className="row">
            {products.map((p) => {
              return (
                <div key={p._id} className="col-md-4">
                  <ProductsCard product={p} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;