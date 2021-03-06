import React, { useContext } from "react";
import useMovieDB from "../../hooks/useMovieDB";
import CardMovie from "../CardMovie";
import MovieSwiper from "../MovieSwiper";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB(`movie/popular`);

  return (
    <>
      <h2 className="text-gray-200 mx-6 mt-5 text-3xl  font-bold">
        Popular Movie
      </h2>

      <MovieSwiper data={data} loading={loading} />
    </>
  );
}
