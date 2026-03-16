import { estimates as estimatesData } from "@/lib/data";
import DesignEstimateCard from "../components/DesignEstimateCard";

const HomeDesignEstimate = () => {
  const estimates = estimatesData;

  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-sm font-semibold uppercase text-copper">
          Get the estimate
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] w-170 text-center capitalize">
          Calculate the approximate cost of doing up your home interiors
        </h1>
        <div className="flex max-xl:flex-col gap-10">
          {estimates.map((estimate, index) => (
            <DesignEstimateCard
              key={index}
              title={estimate.title}
              description={estimate.description}
              icon={estimate.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignEstimate;
