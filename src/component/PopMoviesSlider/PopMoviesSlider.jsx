import React, { useContext } from "react";
import useMovieDB from "../../hooks/useMovieDB";
import CardMovie from "../CardMovie";
import MovieSwiper from "../MovieSwiper";
import { MovieOrTv } from "../../context/MovieOrTv";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB(
    `${useContext(MovieOrTv).active}/popular`
  );
  return (
    <>
      <MovieSwiper data={data} loading={loading} />
    </>
  );
}
