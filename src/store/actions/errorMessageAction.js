import { bindActionCreators } from "redux";
import { SET_ERROR } from "../constant/constant";
import { store } from "../store";

function setError(message, title) {
  return {
    type: SET_ERROR,
    payload: {
      message,
      title,
    },
  };
}

const errorMessageAction = bindActionCreators(
  {
    setError,
  },
  store.dispatch
);

export default errorMessageAction;
