import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SwiperCore, {Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const slide_img = [
  {
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },

  {
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },

  {
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },

  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  }];

const Testimonials = () => {
  return (
    <div className="swiper-container">
      <h1>Voici ce que nos partenaires disent de nous</h1>
      <Swiper
        autoplay={{"delay": 4000}}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {slide_img.map((img, i) => {
          return (
            <div className="slider-container">
              <SwiperSlide key={i}>
                  <div className="slider-p" >
                    <img src={img.image} alt="" />
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#fa0000",}} />
                    <p>{img.quote}</p>
                  </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;