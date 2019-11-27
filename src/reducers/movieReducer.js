import { MOVIES } from "../constants";

const initialState = [];

const movieReducer = (state = initialState, action) => {
  if (action.type === MOVIES.LOAD_SUCCESS) {
    return action.movies;
  }
  return state;
};

export default movieReducer;
