import { addFavourite, removeFavourite } from "../actions/favouritesActions";

const id = 9999;

test("should store favourite ids in favourites store", () => {
  expect(addFavourite(id)).toEqual({ type: "ADD_TO_FAVORITES", payload: id });
});

test("should remove favourite id in favourites store", () => {
  expect(removeFavourite(id)).toEqual({
    type: "REMOVE_FROM_FAVORITES",
    payload: id,
  });
});
