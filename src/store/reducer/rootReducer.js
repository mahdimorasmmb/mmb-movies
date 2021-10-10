import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

export const rootReducer = combineReducers({
  account: accountReducer,
});
