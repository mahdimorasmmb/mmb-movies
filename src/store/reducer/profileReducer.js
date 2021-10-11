import { SET_PROFILE } from "../constant/constant";

export default function profileReducer(state = null, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
