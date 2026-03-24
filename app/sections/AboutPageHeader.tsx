import Image from "next/image";

import aboutHeaderBg from "@/public/about-header-bg.png";

const AboutPageHeader = () => {
  return (
    <div className="relative w-full h-[50vh] min-h-150 max-h-155 text-white">
      <Image
        src={aboutHeaderBg}
        alt=""
        fill
        className="object-fit pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-1 text-center">
        <h3 className="uppercase font-semibold text-xl">
          Explore the features
        </h3>
        <h1 className="font-bold text-[96px]">About Us</h1>
      </div>
      <div className="absolute inset-0 bg-copper opacity-80 pointer-events-none" />
    </div>
  );
};

export default AboutPageHeader;
