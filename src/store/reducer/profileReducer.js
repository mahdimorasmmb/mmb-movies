import { LOG_OUT, SET_PROFILE } from "../constant/constant";

export default function profileReducer(state = null, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
