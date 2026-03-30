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
    <div className="lg:flex-1 relative 2240p:h-85 1920p:max-2240p:h-75 1600p:max-1920p:h-60 2xl:max-1600p:h-60 1440p:max-2xl:h-55 xl:max-1440p:h-50 max-xl:h-50 max-lg:w-150 max-lg:h-75 max-md:w-4/5 max-md:h-40">
      <div className="relative w-full h-full">
        <Image src={src} alt="" fill className="object-cover" />
      </div>
      {/* <div className="bg-white xl:py-4 1440p:px-6 px-5 py-4 1920p:w-105 1600p:max-1920p:w-95 1440p:w-85 xl:max-1440p:w-70 max-xl:w-90 relative bottom-5 left-1/2 -translate-x-1/2 shadow-xl flex items-center justify-between 1440p:gap-5 gap-2">
        <div>
          <h3 className="font-bold 1440p:text-xl text-base max-xl:text-xl">
            {name}
          </h3>
          <span className="pb-0 1920p:text-base 1600p:max-1920p:text-sm 1440p:text-xs text-[10px] max-xl:text-sm opacity-50">
            {description}
          </span>
        </div>
        <div>
          <button className="xl:py-1 xl:px-2 py-0.5 px-1 bg-copper text-white">
            <ChevronRight size={18} />
          </button>
        </div>
      </div> */}
      <div className="bg-white/15 backdrop-blur-xs xl:py-4 1440p:px-6 px-5 py-4 1920p:w-90 1600p:max-1920p:w-85 1440p:w-80 xl:max-1440p:w-70 max-xl:w-60 max-lg:w-100 max-md:w-4/5 relative bottom-5 left-1/2 -translate-x-1/2 shadow-xl flex items-center justify-between 1440p:gap-5 gap-2 max-lg:hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div>
          <h3 className="font-bold 1440p:text-xl text-base">{name}</h3>
          <span className="pb-0 1920p:text-base 1600p:max-1920p:text-sm 1440p:text-xs text-[10px] max-xl:text-sm opacity-50">
            {description}
          </span>
        </div>
        <div>
          <button className="xl:py-1 xl:px-2 py-0.5 px-1 bg-copper text-white cursor-pointer">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignServicesCard;
