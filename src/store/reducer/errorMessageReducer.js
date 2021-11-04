import { SET_ERROR } from "../constant/constant";

export default function errorMessageReducer(
  state = {
    message: "",
    isActive: "hidden",
    type: "",
  },
  action
) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
