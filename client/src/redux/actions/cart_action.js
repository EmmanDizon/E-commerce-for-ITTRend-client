import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

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

export const onChangeCart = (quantity, _id) => (dispatch) => {
  const result = {
    quantity,
    _id,
  };
  dispatch({
    type: ADD_TO_CART,
    payload: result,
  });
};
