import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../config";

export function addFavourite(id) {
  return { type: ADD_TO_FAVORITES, payload: id };
}

export function removeFavourite(id) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
}
