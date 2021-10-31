import {
  ADD_WATCH_LIST,
  LOG_OUT,
  SET_FAVORITE,
  SET_FAVORITE_MOVIE,
  SET_FAVORITE_TV,
  SET_PROFILE,
  SET_STORE,
} from "../constant/constant";

export default function profileReducer(
  state = {
    profile: null,
    favorite: {
      movie: null,
      tv: null,
    },
    watchList: {
      movie: null,
      tv: null,
    },
  },
  action
) {
  switch (action.type) {
    case SET_STORE:
      return action.payload;

    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
