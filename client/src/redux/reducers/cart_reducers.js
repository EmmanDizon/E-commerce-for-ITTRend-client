import {
  ADD_TO_CART,
  ADD_TO_CART_CHANGE_QUANTITY,
  REMOVE_TO_CART,
} from "../constants";

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

    case ADD_TO_CART_CHANGE_QUANTITY:
      const data = action.payload;
      console.log(state.cartItems);
      const increaseQuantity = state.cartItems.find((i) => i._id === data._id);
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i._id === increaseQuantity._id ? data : i
        ),
      };

    default:
      return state;
  }
};
