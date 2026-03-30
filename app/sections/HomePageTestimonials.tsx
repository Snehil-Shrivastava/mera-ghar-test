"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import "./HomePageTestimonials.css";

import heart from "@/public/heart.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonilaCard from "../components/TestimonilaCard";

const HomePageTestimonials = () => {
  return (
    <div className="py-25 bg-cream">
      <div className="flex flex-col items-center gap-10 max-md:gap-8 w-[90%] max-w-360 mx-auto">
        <h3 className="text-sm max-md:text-[10px] font-semibold uppercase text-copper flex gap-5 max-md:gap-1.5">
          <Image src={heart} alt="" className="max-md:w-3" />
          <span>loved by homeowners</span>
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-170 max-lg:w-140 max-md:w-[90%] text-center capitalize">
          Trusted for Decades - Here&apos;s Why
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i}>
              <TestimonilaCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageTestimonials;
