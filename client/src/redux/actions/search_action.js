import { SEARCH_QUERY, FILTER_PRODUCT } from "../constants";

export const searchProduct = (value) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_QUERY,
      payload: {
        text: value,
      },
    });
  } catch (error) {
    dispatch({
      type: SEARCH_QUERY,
      payload: error.response.data.message,
    });
  }
};

export const filterProduct = (value) => (dispatch) => {
  try {
    dispatch({
      type: FILTER_PRODUCT,
      payload: {
        text: value,
      },
    });
  } catch (error) {
    dispatch({
      type: FILTER_PRODUCT,
      payload: error.response.data.message,
    });
  }
};
