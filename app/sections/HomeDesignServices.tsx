import DesignServicesCard from "../components/DesignServicesCard";
import { services as servicesData } from "@/lib/data";

const HomeDesignServices = () => {
  const services = servicesData;

  return (
    <div className="pt-20 pb-50 bg-cream">
      <div className="flex flex-col items-center gap-10 max-md:gap-8 w-[90%] max-w-360 mx-auto">
        {/* <h3 className="text-sm max-md:text-[10px] font-semibold uppercase text-copper">
          one-stop shop
        </h3> */}
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-170 max-lg:w-140 max-md:w-[90%] text-center capitalize">
          Elevate Your Home With Premium Modular Solutions
        </h1>
        <div className="flex gap-15 lg:max-xl:gap-10 w-full max-lg:flex-col max-xl:items-center max-lg:gap-40">
          {services.map((service, index) => (
            <DesignServicesCard
              key={index}
              name={service.name}
              description={service.description}
              src={service.src}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignServices;
