import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import errorMessageReducer from "./errorMessageReducer";
import profileReducer from "./profileReducer";

export const rootReducer = combineReducers({
  account: accountReducer,
  profile: profileReducer,
  error: errorMessageReducer,
});
