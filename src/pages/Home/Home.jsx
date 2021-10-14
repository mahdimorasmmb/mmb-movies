import React from "react";

import PopMoviesSlider from "../../component/PopMoviesSlider/PopMoviesSlider";
import PopTvSlider from "../../component/PopTvSlider";
import MovieOrTvProvider from "../../context/MovieOrTv";

export default function Home() {
  return (
    <MovieOrTvProvider>
      <PopMoviesSlider />
      <PopTvSlider />
    </MovieOrTvProvider>
  );
}
