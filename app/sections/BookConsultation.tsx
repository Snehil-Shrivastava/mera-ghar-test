import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import wpImg from "@/public/wp-img.svg";

const BookConsultation = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/kitchen_2.webp')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="flex flex-col gap-5 py-30 1600p:py-45 w-[90%] max-w-360 mx-auto">
        <h3 className="text-sm max-md:text-[10px] font-semibold uppercase text-copper w-60">
          Let&apos;s Begin Crating Your Home
        </h3>
        <h1 className="text-brand-brown font-bold text-[60px] max-lg:text-[44px]/[52px] max-md:text-2xl capitalize w-230 max-md:w-full max-lg:w-full">
          <span>Connect With</span>
          <br />
          <span>The Experts Now</span>
        </h1>
        <div className="flex gap-10 items-center">
          <Link
            href={"?showQuotationForm=true"}
            className="flex gap-4 justify-between bg-copper py-3.5 px-5 w-80 text-white max-md:text-sm"
          >
            <button className="uppercase">Book free consultation</button>
            <ChevronRight />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=%2B918127300000&text&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <Image src={wpImg} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
