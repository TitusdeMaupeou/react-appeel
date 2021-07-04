import { combineReducers } from "redux";
import { favouritesReducer } from "./favouritesReducer";

export const rootReducer = combineReducers({
  favouriteStore: favouritesReducer,
});