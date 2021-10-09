import React from "react";
import useMovieDB from "../../src/hooks/useMovieDB";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";

// Import Swiper styles

export default function MovieSwiper({ loading, data }) {
  return (
    <Swiper
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {loading ? (
        <h1>is loading....</h1>
      ) : (
        data?.results.map((movie) => (
          <SwiperSlide>
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
