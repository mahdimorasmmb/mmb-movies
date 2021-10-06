import React from "react";
import useMovieDB from "../../src/hooks/useMovieDB";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";

// Import Swiper styles

export default function MovieSwiper({ loading, data }) {
  return (
    <Swiper
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      spaceBetween={3}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {loading ? (
        <h1>is loading....</h1>
      ) : (
        data?.results.map((movie) => (
          <SwiperSlide className=" w-8/12 px-6 ">
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
