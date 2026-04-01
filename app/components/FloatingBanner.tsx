import Image from "next/image";

import freedelivery from "@/public/lifetime_delivery.svg";
import dalivery30days from "@/public/30_day_delivery.svg";

const FloatingBanner = () => {
  return (
    <div className="fixed right-10 bottom-10 z-999 flex flex-col gap-6">
      <div className="w-35 max-lg:w-25 max-sm:w-18">
        <Image src={freedelivery} alt="" />
      </div>
      <div className="w-35 max-lg:w-25 max-sm:w-18">
        <Image src={dalivery30days} alt="" />
      </div>
    </div>
  );
};

export default FloatingBanner;
