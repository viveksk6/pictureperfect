import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  movies: movieReducer,
  error: errorReducer
});

export default rootReducer;
