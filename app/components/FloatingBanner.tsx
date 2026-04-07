import Image from "next/image";

import freedelivery from "@/public/lifetime_delivery.svg";
import delivery30days from "@/public/30_day_delivery.svg";
import easyEMI from "@/public/easy_emi_options.svg";
import annualService from "@/public/annual_service_program.svg";

const FloatingBanner = () => {
  return (
    // <div className="fixed right-10 bottom-10 z-999 flex flex-col gap-6">
    //   <div className="w-35 max-lg:w-25 max-sm:w-18">
    //     <Image src={freedelivery} alt="" />
    //   </div>
    //   <div className="w-35 max-lg:w-25 max-sm:w-18">
    //     <Image src={dalivery30days} alt="" />
    //   </div>
    // </div>
    <div className="absolute bottom-20 left-0 right-0 md:flex md:justify-between md:items-center max-md:grid max-md:grid-cols-2 max-md:justify-items-center gap-20 max-md:gap-y-10 max-md:gap-x-0 max-sm:gap-10 w-[90%] max-md:w-[70%] max-sm:w-4/5 max-w-360 mx-auto">
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-27">
        <Image src={freedelivery} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-27 md:hidden">
        <Image src={delivery30days} alt="" />
      </div>
      <div className="w-40 max-lg:w-25 max-md:w-27 max-sm:w-20">
        <Image src={easyEMI} alt="" />
      </div>
      <div className="w-40 max-lg:w-25 max-md:w-27 max-sm:w-20">
        <Image src={annualService} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-30 max-sm:w-27 max-md:hidden">
        <Image src={delivery30days} alt="" />
      </div>
    </div>
  );
};

export default FloatingBanner;
