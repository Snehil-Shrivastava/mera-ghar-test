"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

import homeInterior1 from "@/public/home-interir-1.jpg";
import homeInterior2 from "@/public/home-interir-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "../components/image-carousel";

const HomePageCarousel = () => {
  return (
    <div className="h-[90vh] relative">
      <Swiper
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper h-full relative"
      >
        <SwiperSlide>
          <ImageCarousel
            src={homeInterior1}
            titleTxt="Home to beautiful interior"
            btnTxt="Book free consulatation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarousel
            src={homeInterior2}
            titleTxt="Want to know how much your kitchen interiors will cost?"
            btnTxt="Calculate Now"
          />
        </SwiperSlide>
        <div className="prev bg-white w-12 h-12 absolute left-10 top-1/2 -translate-y-1/2 z-2 rounded-full flex items-center justify-center font-bold">
          <ChevronLeft />
        </div>
        <div className="next bg-white w-12 h-12 absolute right-10 top-1/2 -translate-y-1/2 z-2 rounded-full flex items-center justify-center font-bold">
          <ChevronRight />
        </div>
      </Swiper>
    </div>
  );
};

export default HomePageCarousel;
