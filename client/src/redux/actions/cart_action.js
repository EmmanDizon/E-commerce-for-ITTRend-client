import {
  ADD_TO_CART,
  ADD_TO_CART_CHANGE_QUANTITY,
  REMOVE_TO_CART,
} from "../constants";

import http from "../../service/http";

export const addToCart =
  (product, quantity = 1) =>
  (dispatch) => {
    const result = {
      _id: product._id,
      name: product.name,
      image: product.images[0].url,
      price: product.price,
      description: product.description,
      stocks: product.stocks,
      quantity,
    };

    dispatch({
      type: ADD_TO_CART,
      payload: result,
    });
  };

export const removeToCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });
};

export const onChangeCart = (quantity, id) => async (dispatch) => {
  const { data } = await http.get(
    `${process.env.REACT_APP_NODE_PORT}/products/get_product/${id}`
  );

  const result = {
    _id: data.product._id,
    name: data.product.name,
    image: data.product.images[0].url,
    price: data.product.price,
    description: data.product.description,
    stocks: data.product.stocks,
    quantity,
  };

  dispatch({
    type: ADD_TO_CART_CHANGE_QUANTITY,
    payload: result,
  });
};
