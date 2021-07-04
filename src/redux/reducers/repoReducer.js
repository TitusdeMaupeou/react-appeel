import { setRepos, SET_REPOS } from "./actions/repoActions";
import { API_URL } from "../config";

const initialState = {
  repos: [],
};

export const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        repos: [...state.repos, action.payload],
      };
    default:
      return state;
  }
};

export const fetchRepos = () => async (dispatch, getState) => {
  const data = await fetch(API_URL).then((res) => res.json());

  dispatch(setRepos(data));
};
