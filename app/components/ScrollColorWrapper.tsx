"use client";

import { useEffect, useRef, useState } from "react";

const ScrollColorWrapper = ({ children }: { children: React.ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carouselBottom =
          carouselRef.current.getBoundingClientRect().bottom;
        setScrolledPast(carouselBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ${scrolledPast ? "bg-black text-black" : "bg-white text-white"}`}
    >
      <div ref={carouselRef} className="h-[90vh]" />
      {children}
    </div>
  );
};

export default ScrollColorWrapper;
