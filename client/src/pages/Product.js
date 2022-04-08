import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../service/http";
import ProductCard from "../components/cards/ProductCard";
import Loader from "../components/layout/loader";

function Product() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { product_id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data: result } = await http.get(
      `${process.env.REACT_APP_NODE_PORT}/products/get_product/${product_id}`
    );

    setData(result);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row p-5">
            <ProductCard product={data.product} reviews={data.reviews} />
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
