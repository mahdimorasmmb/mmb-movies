import React from "react";
import useMovieDB from "../../src/hooks/useMovieDB";
import { Swiper, SwiperSlide } from "swiper/react";
import imgSrc from "../helpers/imgSrc";

export default function CastSwiper({ castes }) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      loop
      pagination={{ dynamicBullets: true }}
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1279: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {castes.loading ? (
        <h1>is loading....</h1>
      ) : (
        castes?.data?.cast.map((item) => (
          <SwiperSlide>
            <div className="flex items-center space-x-6 mb-4">
              <img
                className="h-28 w-28 object-cover object-center rounded-full"
                src={imgSrc(item.profile_path, "w185")}
                alt="photo"
              />
              <div>
                <p className="text-xl text-gray-200 font-normal mb-1">
                  {item.name}
                </p>
                <p className="text-base text-blue-600 font-normal">
                  {item.known_for_department}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
