import { process as processData } from "@/lib/data";
import DesignProcessCard from "../components/DesignProcessCard";

const HomeDesignProcess = () => {
  const process = processData;

  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col items-center gap-10 w-[90%] max-w-360 mx-auto">
        <h3 className="text-sm font-semibold uppercase text-copper">
          How it works?
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] w-200 text-center capitalize">
          We design tailored solutions around your needs—so it truly feels like
          home
        </h1>
        <div className="flex justify-between gap-10 max-xl:gap-8 max-xl:pt-10 w-full">
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
