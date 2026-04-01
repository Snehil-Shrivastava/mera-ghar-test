import { process as processData } from "@/lib/data";
import DesignProcessCard from "../components/DesignProcessCard";

const HomeDesignProcess = () => {
  const process = processData;

  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col items-center gap-10 max-md:gap-8 w-[90%] max-w-360 mx-auto">
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-150 max-lg:w-120 max-md:w-[90%] text-center capitalize">
          Home Interiors Solutions Crafted - “Dil Se”
        </h1>
        <div className="flex max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-y-20 justify-between gap-10 max-xl:gap-8 max-xl:pt-10 w-full">
          {process.map((process, index) => (
            <DesignProcessCard
              key={index}
              title={process.title}
              description={process.description}
              icon={process.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignProcess;
