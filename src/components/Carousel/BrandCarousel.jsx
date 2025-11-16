import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandCarousel = ({ brands = [] }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="brand-slider"
    >
      {brands.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="brand-card">
            <img src={brand.logo} alt={brand.name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandCarousel;
