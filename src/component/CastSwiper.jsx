import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CardPeople from "./CardPeople";

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
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 5,
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
            <CardPeople item={item} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
