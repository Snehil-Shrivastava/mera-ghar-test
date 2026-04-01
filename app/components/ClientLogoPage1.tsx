import Image from "next/image";

import hettich from "@/public/client_logos/Hettich.svg";
import hafele from "@/public/client_logos/Ha╠êfele.svg";
import blum from "@/public/client_logos/blum.svg";
import century from "@/public/client_logos/Century.png";
import greenply from "@/public/client_logos/Greenply.png";
import greenlam from "@/public/client_logos/Greenlam.png";
import grass from "@/public/client_logos/Grass.jpg";
import kesseboehmer from "@/public/client_logos/Kesseboehmer.svg";
import salice from "@/public/client_logos/Salice.png";
import tesa from "@/public/client_logos/Action Tesa.png";
import marino from "@/public/client_logos/Merino.png";
import mikasa from "@/public/client_logos/Mikasa.png";

const ClientLogoPage1 = () => {
  return (
    <div className="h-full grid grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 gap-y-20 max-xl:gap-y-15 max-md:gap-x-0 max-md:gap-y-10 max-sm:gap-y-8 gap-x-15 max-xl:justify-items-center">
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={hettich}
          alt=""
          className="object-contain max-sm:scale-150"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={hafele}
          alt=""
          className="object-contain max-lg:scale-140 max-sm:scale-190"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={blum}
          alt=""
          className="object-contain scale-140 max-xl:scale-180"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={century}
          alt=""
          className="object-contain max-lg:scale-120 max-sm:scale-150"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={greenply}
          alt=""
          className="object-contain max-lg:scale-130 max-sm:scale-180"
          fill
        />
      </div>
      <div className="relative h-25 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={greenlam}
          alt=""
          className="object-contain max-xl:scale-160"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={grass}
          alt=""
          className="object-contain max-lg:scale-120 max-sm:scale-180"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={kesseboehmer}
          alt=""
          className="object-contain max-lg:scale-150 max-sm:scale-240"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={salice}
          alt=""
          className="object-contain max-lg:scale-150 max-sm:scale-200"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={tesa}
          alt=""
          className="object-contain max-lg:scale-130 max-sm:scale-180"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={marino}
          alt=""
          className="object-contain max-lg:scale-140 max-sm:scale-180"
          fill
        />
      </div>
      <div className="relative h-20 max-xl:h-14 max-xl:w-40 max-lg:w-20 max-sm:w-12">
        <Image
          src={mikasa}
          alt=""
          className="object-contain max-lg:scale-140 max-sm:scale-200"
          fill
        />
      </div>
    </div>
  );
};

export default ClientLogoPage1;
