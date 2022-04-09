import { SEARCH_QUERY } from "../constants";

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
