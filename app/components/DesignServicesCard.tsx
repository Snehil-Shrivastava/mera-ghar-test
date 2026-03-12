import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const DesignServicesCard = ({
  name,
  description,
  src,
}: {
  name: string;
  description: string;
  src: StaticImageData;
}) => {
  return (
    <div className="relative">
      <div>
        <Image src={src} alt="" />
      </div>
      <div className="bg-white py-8 px-10 w-120 relative bottom-10 left-1/2 -translate-x-1/2 shadow-xl">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl">{name}</h3>
          <button className="py-1 px-3 bg-copper text-white">
            <ChevronRight />
          </button>
        </div>
        {/* <hr className="border-0 border-dotted border-t-2 border-neutral-400 my-4" /> */}
        <div
          className="my-6 h-px w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9c4c3 3px, transparent 1px)",
            backgroundSize: "12px 1px",
          }}
        />
        <span className="pb-0 text-lg opacity-50">{description}</span>
      </div>
    </div>
  );
};

export default DesignServicesCard;
