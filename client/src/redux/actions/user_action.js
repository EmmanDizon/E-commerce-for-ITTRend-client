import { LOGGED_IN_USER, LOGOUT_USER } from "../constants";

export const loginUser = (userParams) => async (dispatch) => {
  try {
    dispatch({
      type: LOGGED_IN_USER,
      payload: {
        email: userParams.email,
        token: await userParams.getIdTokenResult(),
      },
    });
  } catch (error) {}
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });
  } catch (error) {}
};
