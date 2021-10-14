import React from "react";
import useMovieDB from "../hooks/useMovieDB";
import MovieSwiper from "./MovieSwiper";

export default function PopTvSlider() {
  const { data, loading } = useMovieDB(`tv/popular`);
  return (
    <>
      <h2 className="text-gray-200 mx-6  text-3xl  font-bold">Popular Tv</h2>
      <MovieSwiper data={data} loading={loading} />
    </>
  );
}
