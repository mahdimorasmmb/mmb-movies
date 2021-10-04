import React from "react";
import CardMovie from "../../component/CardMovie";
import MovieSwiper from "../../component/MovieSwiper";
import PopMoviesSlider from "../../component/PopMoviesSlider/PopMoviesSlider";
import classes from "./Home.module.scss";
import WhatPopular from "../../component/WhatPopular";

export default function Home() {
  return (
    <>
      <WhatPopular />
      <MovieSwiper />
    </>
  );
}
