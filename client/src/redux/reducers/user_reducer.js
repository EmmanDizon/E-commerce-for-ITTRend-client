import { LOGGED_IN_USER, LOGOUT_USER } from "../constants";
export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
};
