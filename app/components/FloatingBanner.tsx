import Image from "next/image";

import lifetimeWarranty from "@/public/lifetime_warranty.svg";
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
    <div className="md:flex md:justify-between md:items-center max-md:grid max-md:grid-cols-2 max-md:justify-items-center gap-20 max-md:gap-y-10 max-md:gap-x-0 max-sm:gap-10 pb-10 w-full">
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-32">
        <Image src={lifetimeWarranty} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-32 md:hidden">
        <Image src={delivery30days} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-32">
        <Image src={easyEMI} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-32">
        <Image src={annualService} alt="" />
      </div>
      <div className="w-52.5 max-lg:w-37.5 max-md:w-35 max-sm:w-32 max-md:hidden">
        <Image src={delivery30days} alt="" />
      </div>
    </div>
  );
};

export default FloatingBanner;
