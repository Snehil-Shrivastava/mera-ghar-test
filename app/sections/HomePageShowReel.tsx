"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomePageShowReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [videoSrc, setVideoSrc] = useState("/mera-ghar-landscape.webm");
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const updateSrc = () => {
      setVideoSrc(
        window.innerWidth <= 1024
          ? "/mera-ghar-portrait.webm"
          : "/mera-ghar-landscape.webm",
      );
      setEnded(false);
    };

    updateSrc();
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (Math.round(video.currentTime) >= 30) {
        setEnded(true);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoSrc]);

  useGSAP(
    () => {
      if (ended) {
        gsap.fromTo(
          buttonRef.current,
          { yPercent: 50, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6 },
        );
      } else {
        gsap.set(buttonRef.current, { opacity: 0 });
      }
    },
    { dependencies: [ended] },
  );

  return (
    <div className="h-screen relative">
      <div className="relative w-full h-full">
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
      </div>
    </div>
  );
};

export default HomePageShowReel;
