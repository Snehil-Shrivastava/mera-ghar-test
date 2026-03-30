import { client_logos } from "@/lib/data";
import Image from "next/image";

import "./LogoStripCarousel.css";

const LogoStripCarousel = () => {
  const duplicatedLogos = [...client_logos, ...client_logos];
  return (
    <div className="marquee-container w-full">
      <div className="marquee-track h-35 max-sm:h-15 flex items-center">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="logo-slide w-37.5 mx-10 max-sm:mx-5 max-sm:w-20 h-full flex items-center relative"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              // Use unoptimized if images are not high priority and you need to avoid build time warnings
              // priority // Optional: prioritize loading above the fold
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStripCarousel;
