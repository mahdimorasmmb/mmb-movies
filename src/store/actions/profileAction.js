import { bindActionCreators } from "redux";
import { addWatchList } from "../../services/addWatchlist";
import { api } from "../../services/api";
import { apiAccount } from "../../services/apiAccount";
import { getFavoriteApi } from "../../services/getFavoriteApi";
import { getWatchList } from "../../services/getWatchList";
import { setFavoriteApi } from "../../services/setFavoriteApi";
import { LOG_OUT, SET_PROFILE, SET_STORE } from "../constant/constant";
import { store } from "../store";
import errorMessageAction from "./errorMessageAction";

function getProfile() {
  return async (dispatch) => {
    const profile = JSON.parse(localStorage.getItem("store"));
    if (profile) {
      dispatch({ type: SET_STORE, payload: profile });
    } else {
      const session = JSON.parse(localStorage.getItem("session"));
      if (session) {
        const profile = await apiAccount(session);
        const movie = await getFavoriteApi("movies", profile.id, session);
        const tv = await getFavoriteApi("tv", profile.id, session);
        const watchList_tv = await getWatchList("tv", profile.id, session);
        const watchList_movies = await getWatchList(
          "movies",
          profile.id,
          session
        );
        const store = await {
          profile,
          favorite: {
            movie,
            tv,
          },
          watchList: {
            tv: watchList_tv,
            movies: watchList_movies,
          },
        };
        window.localStorage.setItem("store", JSON.stringify(store));
        dispatch({ type: SET_STORE, payload: store });
      } else {
        errorMessageAction.setError("user not login ", "notLogin");
      }
    }
  };
}

function setFavorite(account_id, media_type, media_id, myFavorite) {
  return async (dispatch) => {
    const session = JSON.parse(localStorage.getItem("session"));
    const res = await setFavoriteApi(
      account_id,
      media_type,
      session,
      media_id,
      myFavorite
    );
    console.log("res", res);
    const profile = await apiAccount(session);
    const movie = await getFavoriteApi("movies", profile.id, session);
    const tv = await getFavoriteApi("tv", profile.id, session);
    const watchList_tv = await getWatchList("tv", profile.id, session);
    const watchList_movies = await getWatchList("movies", profile.id, session);
    const store = await {
      profile,
      favorite: {
        movie,
        tv,
      },
      watchList: {
        tv: watchList_tv,
        movies: watchList_movies,
      },
    };
    window.localStorage.setItem("store", JSON.stringify(store));
    dispatch({ type: SET_STORE, payload: store });
    console.log("favret");
  };
}

function setWatchList(account_id, media_type, media_id, myWatchList) {
  return async (dispatch) => {
    const session = JSON.parse(localStorage.getItem("session"));
    const res = await addWatchList(
      account_id,
      media_type,
      session,
      media_id,
      myWatchList
    );
    console.log("res", res);
    const profile = await apiAccount(session);
    const movie = await getFavoriteApi("movies", profile.id, session);
    const tv = await getFavoriteApi("tv", profile.id, session);
    const watchList_tv = await getWatchList("tv", profile.id, session);
    const watchList_movies = await getWatchList("movies", profile.id, session);
    const store = await {
      profile,
      favorite: {
        movie,
        tv,
      },
      watchList: {
        tv: watchList_tv,
        movies: watchList_movies,
      },
    };
    console.log("wach");
    window.localStorage.setItem("store", JSON.stringify(store));
    dispatch({ type: SET_STORE, payload: store });
  };
}

function logOut(history) {
  return async (dispatch) => {
    dispatch({ type: LOG_OUT });
    window.localStorage.removeItem("store");
    history.push("/");
  };
}

const profileAction = bindActionCreators(
  {
    getProfile,
    logOut,
    setFavorite,
    setWatchList,
  },
  store.dispatch
);

export default profileAction;
