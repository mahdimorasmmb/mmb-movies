import { bindActionCreators } from "redux";
import { SET_ERROR } from "../constant/constant";
import { store } from "../store";

function setError(message) {
  return async (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: {
        message,
        isActive: "",
        type: "",
      },
    });
    setTimeout(() => {
      dispatch({
        type: SET_ERROR,
        payload: {
          message,
          isActive: "hidden",
          type: "",
        },
      });
    }, 7000);
  };
}
function setErrorLogin(message) {
  return async (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: {
        message,
        isActive: "",
        type: "login",
      },
    });
    setTimeout(() => {
      dispatch({
        type: SET_ERROR,
        payload: {
          message,
          isActive: "hidden",
          type: "login",
        },
      });
    }, 7000);
  };
}

const errorMessageAction = bindActionCreators(
  {
    setError,
    setErrorLogin,
  },
  store.dispatch
);

export default errorMessageAction;
