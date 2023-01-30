import React from "react";
import { MovieDetail } from "./MovieDetail";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? movies.map((movieDetail) => (
        <MovieDetail key={movieDetail.imdbID} {...movieDetail} />
      )) : <h4>Not found</h4>
    }
    </div>
  );
}

export { Movies };
