import { combineReducers } from "redux";
import { favouritesReducer } from "./favouritesReducer";
import { repoReducer } from "./repoReducer";

export const rootReducer = combineReducers({
  favouriteStore: favouritesReducer,
  repoStore: repoReducer,
});
