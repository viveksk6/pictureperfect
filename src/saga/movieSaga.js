import { put, call, takeEvery } from "redux-saga/effects";

import { setMovies, setError } from "../actions";
import { MOVIES } from "../constants";
import { fetchMovies } from "../api/index.js";

export function* handleMoviesLoad(pageNo) {
  try {
    //console.log("1");
    var p = 1;
    if (pageNo.page !== undefined) {
      p = pageNo.page;
    }

    const movies = yield call(fetchMovies, p);
    //console.log(pageNo);
    yield put(setMovies(movies, p));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchMoviesLoad() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}
