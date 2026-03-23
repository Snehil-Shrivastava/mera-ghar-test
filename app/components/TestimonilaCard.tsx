import Image from "next/image";

import checkboardPlaceholder from "@/public/checkboard-placeholder.svg";

const TestimonilaCard = () => {
  return (
    <div className="bg-white px-8 py-4 flex flex-col gap-5">
      <div className="text-xl opacity-50">
        <q>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </q>
      </div>
      <div className="flex gap-6">
        <div>
          <Image src={checkboardPlaceholder} alt="" />
        </div>
        <div>
          <h4 className="font-bold text-xl">Mr. John Doe</h4>
          <span className="text-sm">CLIENTS</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonilaCard;
