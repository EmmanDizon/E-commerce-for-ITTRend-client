import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find((i) => i._id === item._id);

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== action.payload),
      };
    default:
      return state;
  }
};
