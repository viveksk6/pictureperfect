import { MOVIES } from "../constants";
import movieData from "../movieData.json";

const initialState = {
  movieDetails: movieData
};

const movieDetailsReducer = (state = initialState, action) => {
  if (action.type === MOVIES.LOAD_DETAILS_SUCCESS) {
    return { movieDetails: action.movieDetails };
  }
  return state;
};

export default movieDetailsReducer;
