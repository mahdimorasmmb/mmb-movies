import { bindActionCreators } from "redux";
import { SEARCH } from "../constant/constant";
import { store } from "../store";

function searchHeader(options, history, handleCancel) {
  return async (dispatch) => {
    dispatch({ type: SEARCH, payload: options });
    history.push("/search");
    console.log("header");
    handleCancel();
  };
}
function searchPage(options) {
  return async (dispatch) => {
    dispatch({ type: SEARCH, payload: options });
  };
}

const searchAction = bindActionCreators(
  {
    searchHeader,
    searchPage,
  },
  store.dispatch
);

export default searchAction;
