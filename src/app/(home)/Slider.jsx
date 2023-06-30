"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper";
import mainSlider from "@/data/mainSlider";
import SingleSlider from "./SingleSlider";

const Slider = () => {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
