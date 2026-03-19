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
    <div className="relative 2240p:w-150 2240p:h-75 1920p:max-2240p:w-140 1920p:max-2240p:h-70 1600p:max-1920p:w-115 1600p:max-1920p:h-60 2xl:max-1600p:w-110 2xl:max-1600p:h-60 1440p:max-2xl:w-100 1440p:max-2xl:h-55 xl:max-1440p:w-85 xl:max-1440p:h-50 max-xl:w-120 max-xl:h-60">
      {/* <div className="relative w-142.75 h-65.25"> */}
      <div className="relative w-full h-full">
        <Image src={src} alt="" fill className="object-cover" />
      </div>
      <div className="bg-white xl:py-4 xl:px-6 px-5 py-4 1920p:w-100 1600p:max-1920p:w-80 1440p:w-70 xl:max-1440p:w-60 max-xl:w-90 relative bottom-5 left-1/2 -translate-x-1/2 shadow-xl">
        <div className="flex justify-between">
          <h3 className="font-bold 1440p:text-xl text-base max-xl:text-xl">
            {name}
          </h3>
          <button className="xl:py-1 xl:px-2 py-0.5 px-1 bg-copper text-white">
            <ChevronRight size={18} />
          </button>
        </div>
        <div
          className="1440p:my-4 my-3 h-px w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9c4c3 3px, transparent 1px)",
            backgroundSize: "12px 1px",
          }}
        />
        <span className="pb-0 1920p:text-base 1600p:max-1920p:text-sm 1440p:text-xs text-[10px] max-xl:text-sm opacity-50">
          {description}
        </span>
      </div>
    </div>
  );
};

export default DesignServicesCard;
