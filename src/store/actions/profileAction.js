import { bindActionCreators } from "redux";
import { apiAccount } from "../../services/apiAccount";
import { SET_PROFILE } from "../constant/constant";
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

const profileAction = bindActionCreators(
  {
    getProfile,
  },
  store.dispatch
);

export default profileAction;
