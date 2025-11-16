import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = ({ testimonials = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
      }}
      pagination={{
        clickable: true,
        el: ".testimonial-pagination",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card">
            <div className="box-icon">
              <Quote size={40} />
            </div>
            <div className="box-rating">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="box-text">{testimonial.text}</p>
            <div className="box-profile">
              <div className="box-img">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="media-body">
                <h3 className="box-title">{testimonial.name}</h3>
                <span className="box-designation">{testimonial.designation}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="testimonial-prev swiper-button-prev"></div>
      <div className="testimonial-next swiper-button-next"></div>
      <div className="testimonial-pagination swiper-pagination"></div>
    </Swiper>
  );
};

export default TestimonialCarousel;
