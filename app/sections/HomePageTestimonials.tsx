"use client";

import "swiper/css";
import "swiper/css/pagination";

import "./HomePageTestimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonilaCard from "../components/TestimonilaCard";
import { Testimonials } from "@/lib/data";

const HomePageTestimonials = () => {
  const TestimonialsData = Testimonials;
  return (
    <div className="py-25 bg-cream">
      <div className="flex flex-col items-center gap-10 max-md:gap-8 w-[90%] max-w-360 mx-auto">
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-170 max-lg:w-140 max-md:w-[90%] text-center capitalize">
          Trusted for Life - Here&apos;s Why
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
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
          {TestimonialsData.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <TestimonilaCard
                quote={testimonials.quote}
                name={testimonials.name}
                location={testimonials.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageTestimonials;
