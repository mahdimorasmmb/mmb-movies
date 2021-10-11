import { SET_ERROR } from "../constant/constant";

export default function errorMessageReducer(state = {}, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
