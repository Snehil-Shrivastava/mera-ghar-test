import Image, { StaticImageData } from "next/image";
import aboutHeaderBg from "@/public/about-header-bg.png";

const PageBanner = ({
  heading,
  tagline,
  paragraph,
  imgSrc = aboutHeaderBg,
}: {
  heading: string;
  tagline?: string;
  paragraph?: string;
  imgSrc?: StaticImageData;
}) => {
  return (
    <div className="relative w-full h-[50vh] min-h-150 max-h-155 text-white">
      <Image
        src={imgSrc}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-1 text-center max-w-180">
        {tagline && (
          <h3 className="uppercase font-semibold text-xl">{tagline}</h3>
        )}
        <h1 className="font-bold text-[96px] capitalize">{heading}</h1>
        {paragraph && <p className="text-lg text-cream">{paragraph}</p>}
      </div>
      <div className="absolute inset-0 bg-copper opacity-80 pointer-events-none" />
    </div>
  );
};

export default PageBanner;
