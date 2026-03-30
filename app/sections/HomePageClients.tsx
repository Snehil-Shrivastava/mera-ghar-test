import { process as processData } from "@/lib/data";
import DesignProcessCard from "../components/DesignProcessCard";
import LogoStripCarousel from "../components/LogoStripCarousel";

const HomePageClients = () => {
  const process = processData;
  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col items-center gap-4 w-[90%] max-w-360 mx-auto">
        {/* <h3 className="text-sm max-md:text-[10px] font-semibold uppercase text-copper">
          How it works?
        </h3> */}
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-200 max-lg:w-160 max-md:w-[90%] text-center capitalize">
          Companies we work with
        </h1>
        <div className="max-xl:pt-10 max-lg:pt-8 w-full">
          {/* {process.map((process, index) => (
            <DesignProcessCard
              key={index}
              title={process.title}
              description={process.description}
              icon={process.icon}
            />
          ))} */}
          <LogoStripCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomePageClients;
