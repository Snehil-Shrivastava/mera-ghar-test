import Image from "next/image";
import kitchen1 from "@/public/kitchen_1.webp";

const KitchenHeader = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-150 max-h-160 text-white">
      <Image
        src={kitchen1}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-1 text-center w-4/5">
        <h1 className="font-bold text-[96px] max-lg:text-[68px] capitalize">
          Mera Kitchen
        </h1>
        <div className="flex flex-col gap-4 max-w-180 mx-auto">
          <p className="text-lg text-cream">
            Mera Kitchen is crafted for your everyday living! Your habits, your
            space, your rhythm. Frenzied mornings or slow weekends, our kitchens
            make the experience joyful and convenient.
          </p>
          <p className="text-lg text-cream">
            We curate to balance functionality, comfort and aesthetics. Because
            a kitchen shouldn&apos;t just look good. It should feel right, every
            single day.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-copper opacity-80 pointer-events-none" />
    </div>
  );
};

export default KitchenHeader;
