//import movieData from "../movieData.json";

const pageSize = `3`;
const URL = `http://localhost:10000/all`;
//const page = `all`;

const fetchMovies = async pageNo => {
  const response = await fetch(`${URL}?pageSize=${pageSize}&pageNo=${pageNo}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.Error);
  }
  return data;
  //return movieData;
};

const fetchMovieDetails = async movieId => {
  const response = await fetch(`${URL}/${movieId}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.Error);
  }
  return data;
  //return movieData;
};

export { fetchMovies, fetchMovieDetails };
