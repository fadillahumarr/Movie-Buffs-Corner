import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import { getMovieList } from "../api";

const MovieCard = ({ movies }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movies || movies.length == 0) {
      getMovieList()
        .then((result) => {
          setNowPlaying(result);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setNowPlaying(movies);
    }
  }, [movies]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="grid grid-cols-1 px-10 gap-4 lg:grid-cols-2 xl:grid-cols-3 ">
      {nowPlaying.map((movie, idx) => {
        return (
          <section key={idx} className="">
            <div className="flex gap-5 border-2 rounded-md px-10 py-5 text-white">
              <div className="w-1/2">
                <img
                  src={`${import.meta.env.VITE_IMGURL}/${movie.poster_path}`}
                  alt="Poster Movie"
                  className=" rounded-lg w-full h-80"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className=" w-1/2 flex flex-col gap-3 justify-center">
                <h3 className=" text-secondary font-mono text-xl">
                  {movie.release_date}
                </h3>
                <h1 className="text-2xl font-extrabold line-clamp-3">
                  {movie.title}
                </h1>
                <p className=" line-clamp-3 text-justify">{movie.overview}</p>
                <div className=" flex gap-3">
                  <Button name="Watch" />
                  <Button name="Details" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
    })
  ),
};

export default MovieCard;
