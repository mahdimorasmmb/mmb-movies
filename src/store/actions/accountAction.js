import { LOGIN } from "../constant/constant";

import { bindActionCreators } from "redux";
import { store } from "../store";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import profileAction from "./profileAction";

function login(user) {
  return async (dispatch) => {
    const { request_token } = await api("authentication/token/new");
    const validate_token = await api(
      "authentication/token/validate_with_login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.userName,
          password: user.password,
          request_token: request_token,
        }),
      }
    );
    console.log(validate_token);
    if (validate_token.success === true) {
      const session = await api("authentication/session/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request_token: validate_token.request_token,
        }),
      });
      window.localStorage.setItem(
        "session",
        JSON.stringify(session.session_id)
      );
      dispatch({ type: LOGIN, payload: session });
      profileAction.getProfile();
      user.history.push("/");
    }
  };
}

const accountAction = bindActionCreators(
  {
    login,
  },
  store.dispatch
);

export default accountAction;
