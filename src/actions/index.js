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

const loadMovieDetails = movieId => ({
  type: MOVIES.LOAD_DETAILS,
  movieId
});

const setMovieDetails = movieDetails => ({
  type: MOVIES.LOAD_DETAILS_SUCCESS,
  movieDetails
});

export { loadMovies, setMovies, setError, setMovieDetails, loadMovieDetails };
