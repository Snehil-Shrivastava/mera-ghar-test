import Image from "next/image";

import checkboardPlaceholder from "@/public/checkboard-placeholder.svg";

const TestimonilaCard = ({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) => {
  return (
    <div className="bg-white px-8 py-4 flex flex-col gap-5">
      <div className="text-xl max-xl:text-lg opacity-50">
        <q>{quote}</q>
      </div>
      <div className="flex gap-6">
        {/* <div>
          <Image src={checkboardPlaceholder} alt="" />
        </div> */}
        <div>
          <h4 className="font-bold text-xl max-xl:text-lg">{name}</h4>
          <span className="text-sm max-xl:text-xs">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonilaCard;
