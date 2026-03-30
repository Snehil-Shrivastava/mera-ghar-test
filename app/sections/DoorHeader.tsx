import Image from "next/image";
import door1 from "@/public/door_1.webp";

const DoorHeader = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-150 max-h-160 text-white">
      <Image
        src={door1}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-1 text-center w-4/5">
        <h1 className="font-bold text-[96px] max-lg:text-[68px] capitalize">
          Mera Door
        </h1>
        <div className="flex flex-col gap-4 max-w-180 mx-auto">
          <p className="text-lg text-cream">
            Mera Door is designed and crafted to complement modern
            aesthetics.Luxurious and iconic designs for all those who value
            proportion, material harmony, and statement entrances.
          </p>
          <p className="text-lg text-cream">
            Our doors lead into the spaces you have created in life, adding
            depth, elegance, and bespoke modern luxury to the entrance and
            turning it into a signature entrance.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-copper opacity-80 pointer-events-none" />
    </div>
  );
};

export default DoorHeader;
