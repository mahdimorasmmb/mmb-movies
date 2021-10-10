import { LOGIN } from "../constant/constant";

export default function accountReducer(state = { session: null }, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
