import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import errorMessageReducer from "./errorMessageReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  account: accountReducer,
  profile: profileReducer,
  error: errorMessageReducer,
});
