import React, { useEffect, useState } from "react";
import useMovieDB from "../../hooks/useMovieDB";
import { api } from "../../services/api";
import movies from "../../services/movies";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB("movie/popular");
  return (
    <div>
      {loading ? (
        <h1>is loading....</h1>
      ) : (
        data.results.map((movie) => <h3>{movie.title}</h3>)
      )}
    </div>
  );
}
