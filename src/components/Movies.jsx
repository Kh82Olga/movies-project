import React from "react";
import { MovieDetail } from "./MovieDetail";

function Movies(props) {
  const { movies } = props;
  return (
    <div className="movies">
      {movies.map((movieDetail) => (
        <MovieDetail key={movieDetail.imdbID} {...movieDetail} />
      ))}
    </div>
  );
}

export { Movies };
