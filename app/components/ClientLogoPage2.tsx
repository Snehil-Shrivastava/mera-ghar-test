import Image from "next/image";

import ramplus from "@/public/client_logos/Ramplus.png";
import mepla from "@/public/client_logos/Mepla.svg";
import aristo from "@/public/client_logos/Aristo.png";
import veneto from "@/public/client_logos/Veneto.jpg";
import senosan from "@/public/client_logos/Senosan.jpg";
import bosch from "@/public/client_logos/Bosch.svg";
import kaff from "@/public/client_logos/Kaff.png";
import godrej from "@/public/client_logos/Godrej.png";
import specta from "@/public/client_logos/Specta.jpg";
import archidply from "@/public/client_logos/Archidply.png";
import alstone from "@/public/client_logos/Alstone.jpg";
import floresta from "@/public/client_logos/Floresta.jpg";

const ClientLogoPage2 = () => {
  return (
    <div className="h-full grid grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 gap-y-20 max-xl:gap-y-15 max-md:gap-x-0 max-md:gap-y-10 max-sm:gap-y-8 gap-x-15 max-xl:justify-items-center">
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={ramplus}
          alt=""
          className="object-contain max-lg:scale-140"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={mepla}
          alt=""
          className="object-contain max-lg:scale-140"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image src={aristo} alt="" className="object-contain" fill />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={veneto}
          alt=""
          className="object-contain scale-120 max-xl:scale-160 max-lg:scale-200"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={senosan}
          alt=""
          className="object-contain max-lg:scale-140"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={bosch}
          alt=""
          className="object-contain max-lg:scale-140"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={kaff}
          alt=""
          className="object-contain scale-130 max-lg:scale-180"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={godrej}
          alt=""
          className="object-contain max-lg:scale-140"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={specta}
          alt=""
          className="object-contain max-xl:scale-130"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={archidply}
          alt=""
          className="object-contain max-lg:scale-150"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image src={alstone} alt="" className="object-contain" fill />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={floresta}
          alt=""
          className="object-contain scale-140 max-xl:scale-180"
          fill
        />
      </div>
    </div>
  );
};

export default ClientLogoPage2;
