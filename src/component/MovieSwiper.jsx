import React from "react";
import useMovieDB from "../../src/hooks/useMovieDB";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";

// Import Swiper styles

export default function MovieSwiper({ children }) {
  const { data, loading } = useMovieDB("movie/popular");
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {loading ? (
        <h1>is loading....</h1>
      ) : (
        data.results.map((movie) => (
          <SwiperSlide className="w-full">
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
