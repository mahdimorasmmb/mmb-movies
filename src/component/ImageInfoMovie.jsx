import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgSrc from "../helpers/imgSrc";

export default function ImageInfoMovie({ images }) {
  const { data, loading } = images;
  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      loop
      pagination={{ dynamicBullets: true }}
      breakpoints={{
        400: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        1279: {
          slidesPerView: 4,
          spaceBetween: 4,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {loading ? (
        <h1>is loading....</h1>
      ) : (
        data?.backdrops.map((image) => (
          <SwiperSlide>
            <img
              className="py-7 w-1/3 rounded-3xl "
              src={imgSrc(image.file_path, "w500")}
            />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
