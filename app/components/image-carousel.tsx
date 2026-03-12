import Image, { StaticImageData } from "next/image";

const ImageCarousel = ({
  src,
  titleTxt,
  btnTxt,
}: {
  src: StaticImageData;
  titleTxt: string;
  btnTxt: string;
}) => {
  return (
    <div className="h-full w-full relative">
      <Image src={src} alt="" fill className="object-cover brightness-45" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-2 text-white w-220 text-center">
        <h1 className="text-6xl leading-18 font-bold mb-5">{titleTxt}</h1>
        <button className="uppercase bg-copper py-4 px-10 text-xs font-semibold text-cream">
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
