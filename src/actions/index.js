import { MOVIES } from "../constants";

const loadMovies = page => ({
  type: MOVIES.LOAD,
  page
});

const setMovies = (movies, pageNumber) => ({
  type: MOVIES.LOAD_SUCCESS,
  movies,
  pageNumber
});

const setError = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

export { loadMovies, setMovies, setError };
