import DesignServicesCard from "../components/DesignServicesCard";
import { services as servicesData } from "@/lib/data";

const HomeDesignServices = () => {
  const services = servicesData;

  return (
    <div className="py-20 bg-cream">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-sm font-semibold uppercase text-copper">
          one-stop shop
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] w-170 text-center capitalize">
          Be It End-To-End Interiors, Renovation Or Modular Solutions
        </h1>
        <div className="grid grid-cols-2 gap-15">
          {services.map((service, index) => (
            <DesignServicesCard
              key={index}
              name={service.name}
              description={service.description}
              src={service.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignServices;
