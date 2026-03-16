"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

import homeInterior1 from "@/public/home-interior-1.webp";
import homeInterior2 from "@/public/home-interior-2.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "../components/image-carousel";

const HomePageCarousel = () => {
  return (
    <div className="h-[90vh] relative">
      {/* <Swiper
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
        <div className="prev bg-cream py-1 px-3 absolute left-10 top-1/2 -translate-y-1/2 z-2 flex items-center justify-center font-bold text-copper hover:bg-copper hover:text-cream">
          <ChevronLeft />
        </div>
        <div className="next bg-cream py-1 px-3 absolute right-10 top-1/2 -translate-y-1/2 z-2 flex items-center justify-center font-bold text-copper hover:bg-copper hover:text-cream">
          <ChevronRight />
        </div>
      </Swiper> */}
      <div className="relative w-full h-full">
        <video
          src="/interior_placeholder.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute bottom-80 left-1/2 -translate-x-1/2 z-2">
          <button className="uppercase bg-copper py-4 px-10 text-xs font-semibold text-cream">
            Book free consulatation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;
