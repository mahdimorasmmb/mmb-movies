import { bindActionCreators } from "redux";
import { apiAccount } from "../../services/apiAccount";
import { LOG_OUT, SET_PROFILE } from "../constant/constant";
import { store } from "../store";
import errorMessageAction from "./errorMessageAction";

function getProfile() {
  return async (dispatch) => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      dispatch({ type: SET_PROFILE, payload: profile });
    } else {
      const session = JSON.parse(localStorage.getItem("session"));
      if (session) {
        const profile = await apiAccount(session);
        window.localStorage.setItem("profile", JSON.stringify(profile));
        dispatch({ type: SET_PROFILE, payload: profile });
        window.localStorage.removeItem("session");
      } else {
        errorMessageAction.setError("user not login ", "notLogin");
      }
    }
  };
}

function logOut(history) {
  return async (dispatch) => {
    dispatch({ type: LOG_OUT });
    window.localStorage.removeItem("profile");
    history.push("/");
  };
}

const profileAction = bindActionCreators(
  {
    getProfile,
    logOut,
  },
  store.dispatch
);

export default profileAction;
