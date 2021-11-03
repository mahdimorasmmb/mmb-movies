import React from "react";
import useMovieDB from "../../src/hooks/useMovieDB";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";
import Loading from "./Loading";

// Import Swiper styles

export default function MovieSwiper({ loading, data }) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      loop
      pagination={{ dynamicBullets: true }}
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        1279: {
          slidesPerView: 3,
          spaceBetween: 2,
        },
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        data?.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
