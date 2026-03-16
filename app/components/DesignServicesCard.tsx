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
      <div className="bg-white xl:py-8 xl:px-10 px-5 py-4 xl:w-120 w-90 relative bottom-10 left-1/2 -translate-x-1/2 shadow-xl">
        <div className="flex justify-between">
          <h3 className="font-bold xl:text-2xl text-lg">{name}</h3>
          <button className="xl:py-1 xl:px-3 py-0.5 px-1 bg-copper text-white">
            <ChevronRight />
          </button>
        </div>
        <div
          className="xl:my-6 my-3 h-px w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9c4c3 3px, transparent 1px)",
            backgroundSize: "12px 1px",
          }}
        />
        <span className="pb-0 xl:text-lg text-sm opacity-50">
          {description}
        </span>
      </div>
    </div>
  );
};

export default DesignServicesCard;
