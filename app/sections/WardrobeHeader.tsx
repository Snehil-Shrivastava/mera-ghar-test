import Image from "next/image";
import wardrobe2 from "@/public/wardrobe_2.webp";

const WardrobeHeader = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-150 max-h-160 text-white">
      <Image
        src={wardrobe2}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-1 text-center w-4/5">
        <h1 className="font-bold text-[96px] max-lg:text-[68px] capitalize">
          Mera Wardrobe
        </h1>
        <div className="flex flex-col gap-4 max-w-180 mx-auto">
          <p className="text-lg text-cream">
            Mera Wardrobe is built for your space, your routine, and how you
            prefer to organise. From everyday essentials to special pieces, each
            section is designed to make things simple and bring your style to
            life.
          </p>
          <p className="text-lg text-cream">
            Customised layouts, contemporary aesthetics, intelligent
            compartments, and long-lasting materials that adapt to your
            lifestyle rather than forcing you to adjust. Because when you have
            everything in its place, life feels sorted.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-copper opacity-80 pointer-events-none" />
    </div>
  );
};

export default WardrobeHeader;
