import {
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
    watchList: null,
  },
  action
) {
  switch (action.type) {
    case SET_STORE:
      return action.payload;
    case SET_PROFILE:
      return {
        profile: action.payload,
        ...state,
      };
    case SET_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };
    case SET_FAVORITE_MOVIE:
      return {
        favorite: {
          movie: action.payload,
        },
        ...state,
      };
    case SET_FAVORITE_TV:
      return {
        favorite: {
          tv: action.payload,
        },
        ...state,
      };

    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
