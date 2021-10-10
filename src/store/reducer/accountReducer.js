import { LOGIN } from "../constant/constant";

export default function accountReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
