import { bindActionCreators } from "redux";
import { searchMovieServices } from "../../services/searchMovieServices";
import { SEARCH } from "../constant/constant";
import searchReducer from "../reducer/searchReducer";
import { store } from "../store";

function searchMovie(options, history, handleCancel) {
  return async (dispatch) => {
    const data = await searchMovieServices(options);
    dispatch({ type: SEARCH, payload: data });
    history.push("/search");
    handleCancel();
  };
}

const searchAction = bindActionCreators(
  {
    searchMovie,
  },
  store.dispatch
);

export default searchAction;
