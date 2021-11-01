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
      },
    });
    setTimeout(() => {
      dispatch({
        type: SET_ERROR,
        payload: {
          message,
          isActive: "hidden",
        },
      });
    }, 5000);
  };
}

const errorMessageAction = bindActionCreators(
  {
    setError,
  },
  store.dispatch
);

export default errorMessageAction;
