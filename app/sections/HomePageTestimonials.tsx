import Image from "next/image";

import heart from "@/public/heart.svg";

const HomePageTestimonials = () => {
  return (
    <div className="pt-20 pb-50 bg-cream">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-sm font-semibold uppercase text-copper flex gap-5">
          <Image src={heart} alt="" />
          <span>loved by homeowners</span>
        </h3>
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] w-170 text-center capitalize">
          Trusted for Decades - Here&apos;s Why
        </h1>
        <div className="flex gap-15 max-xl:flex-col max-xl:items-center max-xl:gap-40 max-xl:w-[90%] max-xl:mx-auto">
          {/* {services.map((service, index) => (
            <DesignServicesCard
              key={index}
              name={service.name}
              description={service.description}
              src={service.src}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomePageTestimonials;
