import React, { useEffect, useState } from "react";
import useMovieDB from "../../hooks/useMovieDB";
import CardMovie from "../CardMovie";
import MovieSwiper from "../MovieSwiper";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB("movie/popular");
  return (
    <div>
      {/* {loading ? (
        <h1>is loading....</h1>
      ) : (
        data.results.map((movie) => <MovieSwiper />)
      )} */}
    </div>
  );
}
