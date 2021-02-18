import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './style.scss';

SwiperCore.use([Navigation, Autoplay]);
export default function OfferSection() {
  return (
    <div className="offer">
      <Swiper
        className="offer__swiper"
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 5000 }}
        navigation
        loop
        breakpoints={{
          1025: {
            slidesPerView: 3
          },
          465: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide>
          <img src="./images/offer-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/offer-1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
