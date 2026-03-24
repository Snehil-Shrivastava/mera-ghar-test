import Image from "next/image";

import door3 from "@/public/door_3.webp";

const AboutPageValues = () => {
  return (
    <div className="py-20 overflow-x-hidden">
      <div className="w-[90%] max-w-360 mx-auto">
        <div className="flex flex-col gap-5 items-center">
          <h4 className="uppercase font-semibold text-copper text-sm">
            Values that define us
          </h4>
          <h2 className="capitalize text-brand-brown font-bold text-[40px]">
            Core values
          </h2>
          <div className="flex justify-between w-full pt-10">
            <div className="flex flex-col gap-10 flex-1">
              <div className="border-l-6 border-l-brand-brown pl-10">
                <h4 className="text-[28px] font-bold">Integrity</h4>
                <p>We will always be fair, honest, ethical, and transparent.</p>
              </div>
              <div className="border-l-6 border-l-brand-brown pl-10">
                <h4 className="text-[28px] font-bold">Excellence</h4>
                <p>
                  We will passionately strive to achieve the highest standards
                  of quality.
                </p>
              </div>
              <div className="border-l-6 border-l-brand-brown pl-10">
                <h4 className="text-[28px] font-bold">Customer First</h4>
                <p>
                  We will always put customer delight above all other
                  considerations.
                </p>
              </div>
              <div className="border-l-6 border-l-brand-brown pl-10">
                <h4 className="text-[28px] font-bold">Innovation</h4>
                <p>
                  We will focus relentlessly on improving structural, surface,
                  design, and functional as ects to sta ahead of indust
                  standards..
                </p>
              </div>
              <div className="border-l-6 border-l-brand-brown pl-10">
                <h4 className="text-[28px] font-bold">Ownership</h4>
                <p>
                  Every representative shall be empowered to take responsibility
                  for their own actions and decisions.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={door3}
                alt=""
                className="object-cover h-full absolute -right-25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageValues;
