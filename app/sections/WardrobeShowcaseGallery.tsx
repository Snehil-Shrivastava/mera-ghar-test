import { mera_wardrobe } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WardrobeShowcaseGallery = () => {
  const WardrobeGallery = mera_wardrobe;
  return (
    <div className="py-20 flex flex-col gap-15">
      <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 gap-x-15 gap-y-15 place-items-center">
        {WardrobeGallery.map((data, index) => (
          <Image
            key={index}
            src={data.src}
            alt=""
            className="object-cover h-100"
          />
        ))}
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

export default WardrobeShowcaseGallery;
