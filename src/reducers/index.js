import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";
import pageReducer from "./pageReducer";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  movies: movieReducer,
  error: errorReducer,
  activePage: pageReducer,
  movieDetails: movieDetailsReducer
});

export default rootReducer;
