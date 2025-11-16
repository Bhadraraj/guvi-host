import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroCarousel = ({ slides = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-inner"
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content">
                    {slide.subtitle && (
                      <span className="sub-title" data-ani="slideinup" data-ani-delay="0.1s">
                        {slide.subtitle}
                      </span>
                    )}
                    <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.2s">
                      {slide.title}
                    </h1>
                    {slide.description && (
                      <p className="hero-text" data-ani="slideinup" data-ani-delay="0.3s">
                        {slide.description}
                      </p>
                    )}
                    <div className="btn-group" data-ani="slideinup" data-ani-delay="0.4s">
                      {slide.primaryBtn && (
                        <Link to={slide.primaryBtn.link} className="ot-btn">
                          {slide.primaryBtn.text}
                          <ArrowRight size={16} className="ms-2" />
                        </Link>
                      )}
                      {slide.secondaryBtn && (
                        <Link
                          to={slide.secondaryBtn.link}
                          className="ot-btn style-border"
                        >
                          {slide.secondaryBtn.text}
                          <ArrowRight size={16} className="ms-2" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                {slide.image && (
                  <div className="col-lg-5">
                    <div className="hero-thumb">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default HeroCarousel;
