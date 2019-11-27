import { MOVIES } from "../constants";

const initialState = [];

const movieDetailsReducer = (state = initialState, action) => {
  if (action.type === MOVIES.LOAD_DETAILS_SUCCESS) {
    return action.movieDetails;
  }
  return state;
};

export default movieDetailsReducer;
