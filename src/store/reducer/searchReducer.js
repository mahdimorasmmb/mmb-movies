import { SEARCH } from "../constant/constant";

export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
}
