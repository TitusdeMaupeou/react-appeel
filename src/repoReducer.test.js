import { repoReducer } from "../repoReducer";
import { setRepos } from "../actions/repoActions";

let state = [];

const mockedRepos = [
  {
    id: 1,
    node_id: "MDEwOlJlcG9zaXRvcnkyODk5NTg2MA==",
    name: "6to5",
    full_name: "gaearon/6to5",
    private: false,
    owner: {
      login: "test",
      id: 1,
      node_id: "test",
      avatar_url: "test.com",
    },
    html_url: "test.com",
    description: "test test test",
    fork: true,
  },
  {
    id: 2,
    node_id: "MDEwOlJlcG9zaXRvcnkyODk5NTg2MA==",
    name: "6to5",
    full_name: "gaearon/6to5",
    private: false,
    owner: {
      login: "test2",
      id: 2,
      node_id: "test2",
      avatar_url: "test2.com",
    },
    html_url: "test2.com",
    description: "test test test",
    fork: true,
  },
];

beforeEach(() => {
  state = {
    repos: [{ movie: "test" }, { movie: 82 }],
  };
});

it("should fetch and then properly set the repos in reducer", () => {
  const stateWithRepos = repoReducer(state, setRepos(mockedRepos));
  expect(stateWithRepos).toEqual({
    ...state,
    repos: [...state.repos, mockedRepos],
  });
});
