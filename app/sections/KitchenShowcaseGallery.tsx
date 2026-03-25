import { ChevronRight } from "lucide-react";
import Link from "next/link";

const KitchenShowcaseGallery = () => {
  return (
    <div className="py-20 flex flex-col gap-15">
      <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 gap-x-15 gap-y-15 place-items-center">
        <div className="h-80 w-150 bg-copper"></div>
        <div className="h-80 w-150 bg-copper"></div>
        <div className="h-80 w-150 bg-copper"></div>
        <div className="h-80 w-150 bg-copper"></div>
        <div className="h-80 w-150 bg-copper"></div>
        <div className="h-80 w-150 bg-copper"></div>
      </div>
      <div className="flex gap-10 items-center w-[90%] max-w-360 mx-auto justify-center">
        <Link
          href={"?showQuotationForm=true"}
          className="flex gap-4 justify-between bg-copper py-3.5 px-5 w-80 text-white cursor-pointer"
        >
          <button className="uppercase cursor-pointer">
            Book free consulatation
          </button>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default KitchenShowcaseGallery;
