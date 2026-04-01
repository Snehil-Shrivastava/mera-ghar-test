// "use client";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Swiper, SwiperSlide } from "swiper/react";
// import ClientLogoPage1 from "./ClientLogoPage1";
// import { Navigation } from "swiper/modules";
// import ClientLogoPage2 from "./ClientLogoPage2";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef, useState } from "react";

// const LogoStripCarousel = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const sliderRef: any = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [realIndex, setIndex] = useState(0);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className="h-full relative">
//       <Swiper
//         ref={sliderRef}
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         onInit={(swiper: any) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//         slidesPerView={1}
//         spaceBetween={30}
//         modules={[Navigation]}
//         className="w-full h-full"
//       >
//         <SwiperSlide className="w-full">
//           <ClientLogoPage1 />
//         </SwiperSlide>
//         <SwiperSlide className="w-full">
//           <ClientLogoPage2 />
//         </SwiperSlide>
//       </Swiper>
//       <button
//         ref={prevRef}
//         disabled={realIndex == 0}
//         onClick={() => {
//           setIndex(sliderRef.current?.swiper.realIndex);
//           setIsEnd(sliderRef.current?.swiper.isEnd);
//         }}
//         className="absolute -left-20 bg-copper px-3 py-2 text-white top-1/2 -translate-y-1/2 z-10"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         ref={nextRef}
//         disabled={isEnd}
//         onClick={() => {
//           setIndex(sliderRef.current?.swiper.realIndex);
//           setIsEnd(sliderRef.current?.swiper.isEnd);
//         }}
//         className="absolute -right-20 bg-copper px-3 py-2 text-white top-1/2 -translate-y-1/2 z-10"
//       >
//         <ChevronRight />
//       </button>
//     </div>
//   );
// };

// export default LogoStripCarousel;

// -------------------------- TEST -------------------------------------

"use client";

import "swiper/css";
// You no longer need "swiper/css/navigation" or the Navigation module

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; // Import Swiper type
import ClientLogoPage1 from "./ClientLogoPage1";
import ClientLogoPage2 from "./ClientLogoPage2";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const LogoStripCarousel = () => {
  // Store the swiper instance in state
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Track the beginning and end states natively
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="h-full relative">
      <Swiper
        // Grab the swiper instance when it initializes
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        // Update your React state whenever the slide changes
        onSlideChange={(swiperInstance) => {
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        }}
        slidesPerView={1}
        spaceBetween={30}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full">
          <ClientLogoPage1 />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <ClientLogoPage2 />
        </SwiperSlide>
      </Swiper>

      {/* Previous Button */}
      <button
        disabled={isBeginning}
        onClick={() => swiper?.slidePrev()}
        className={`absolute -left-20 max-xl:-left-15 bg-copper px-3 py-2 max-lg:px-2 max-lg:py-0.5 text-white top-1/2 -translate-y-1/2 z-10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${isBeginning ? "hidden" : ""}`}
      >
        <ChevronLeft className="max-lg:w-4" />
      </button>

      {/* Next Button */}
      <button
        disabled={isEnd}
        onClick={() => swiper?.slideNext()}
        className={`absolute -right-20 max-xl:-right-15 bg-copper px-3 py-2 max-lg:px-2 max-lg:py-0.5 text-white top-1/2 -translate-y-1/2 z-10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${isEnd ? "hidden" : ""}`}
      >
        <ChevronRight className="max-lg:w-4" />
      </button>
    </div>
  );
};

export default LogoStripCarousel;
