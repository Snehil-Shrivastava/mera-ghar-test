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
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-sm font-semibold uppercase text-copper flex gap-5">
          <Image src={heart} alt="" />
          <span>loved by homeowners</span>
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] w-170 text-center capitalize">
          Trusted for Decades - Here&apos;s Why
        </h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-[85%] mx-auto max-w-380"
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
