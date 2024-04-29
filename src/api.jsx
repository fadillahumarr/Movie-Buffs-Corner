import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${import.meta.env.VITE_BASEURL}/movie/now_playing?api_key=${
      import.meta.env.VITE_APIKEY
    }`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${import.meta.env.VITE_BASEURL}/search/movie?query=${q}&api_key=${
      import.meta.env.VITE_APIKEY
    }`
  );
  return search.data.results;
};
