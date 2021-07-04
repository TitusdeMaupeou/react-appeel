import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../config";

const initialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      const favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        favourites,
      };
    default:
      return state;
  }
};
