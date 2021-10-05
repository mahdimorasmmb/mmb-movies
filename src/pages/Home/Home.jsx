import React from "react";

import PopMoviesSlider from "../../component/PopMoviesSlider/PopMoviesSlider";
import classes from "./Home.module.scss";
import WhatPopular from "../../component/WhatPopular";
import MovieOrTvProvider from "../../context/MovieOrTv";

export default function Home() {
  return (
    <MovieOrTvProvider>
      <WhatPopular />
      <PopMoviesSlider />
    </MovieOrTvProvider>
  );
}
