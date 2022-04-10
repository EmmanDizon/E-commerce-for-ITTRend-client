import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsCard from "../components/cards/ProductsCard";
import Loader from "../components/layout/loader";
import SideNavFilter from "../components/layout/SideNavFilter";
import http from "../service/http";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState([0, 0]);
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

  const onChange = (value) => {
    setPrice(value);
  };
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-3">
          <h5>FILTER SECTION</h5>
          <SideNavFilter value={price} onChange={onChange} />
        </div>

        <div className="col-md-9">
          {loading ? <Loader /> : <h5> PRODUCTS </h5>}

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
