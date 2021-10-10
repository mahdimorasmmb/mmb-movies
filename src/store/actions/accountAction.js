import { LOGIN } from "../constant/constant";

import { bindActionCreators } from "redux";
import { store } from "../store";

function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

const accountAction = bindActionCreators(
  {
    login,
  },
  store.dispatch
);

export default accountAction;
