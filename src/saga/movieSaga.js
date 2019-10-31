import { put, call, takeEvery, select } from "redux-saga/effects";

import { setMovies, setError } from "../actions";
import { MOVIES } from "../constants";
import { fetchMovies } from "../api/index.js";

export function* handleMoviesLoad() {
  try {
    console.log("1");
    const movies = yield call(fetchMovies);
    yield put(setMovies(movies));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchMoviesLoad() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}
