"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoSplash({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("ended", () => setEnded(true));
  }, []);

  const handleEnter = () => setVisible(false);

  if (!visible) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/placeholder_globe.webm"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fit"
      />

      {ended && (
        <button
          onClick={handleEnter}
          className="relative z-10 px-8 py-3 bg-cream text-copper text-sm tracking-widest uppercase hover:bg-copper hover:text-cream transition-colors"
        >
          Enter
        </button>
      )}
    </div>
  );
}
