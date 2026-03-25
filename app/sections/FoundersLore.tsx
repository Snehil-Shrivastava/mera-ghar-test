import Image from "next/image";

import logoCream from "@/public/mera-ghar-logo-cream-skeleton.svg";

const FoundersLore = () => {
  return (
    <div className="py-20 overflow-y-hidden">
      <h2 className="capitalize text-brand-brown font-bold text-[40px] text-center mb-15">
        Crossing of Paths
      </h2>
      <div className="w-[90%] max-w-360 mx-auto flex gap-10 relative">
        <div className="flex flex-col gap-4 border-l-6 border-l-brand-brown pl-5 flex-1 text-sm">
          <p>Anurag and Tabrez met for the first time in the year 2009!</p>
          <p>
            Sitting across each other, one a mid sized trader and the other a
            middle level company executive.
          </p>
          <p>
            That introduction led to path breaking business achievements and a
            friendship for life.
          </p>
          <p>
            Over the last 17 years they have been constantly associated in
            business always on the opposite ends of the table. One representing
            the interests of his business the other his professional objectives
            and targets.
          </p>
          <p>
            But throughout this span the friendship and business continued to
            grow stronger and stronger.
          </p>
          <p>
            At play were two set of equations, one professional where each one
            honestly and ethically pitched for their business interests.
          </p>
          <p>
            But at the same time an extremely strong bond of trust and respect
            evolved between the two.
          </p>
        </div>
        <div className="flex-1 text-white font-light relative">
          <div className="bg-brand-brown p-8 absolute w-180 flex flex-col gap-10">
            <div className="relative">
              <Image src={logoCream} alt="" className="w-20 object-cover" />
            </div>
            <div className="flex flex-col gap-3 text-sm w-4/5 max-xl:w-105">
              <p>
                <b className="font-bold">Mera Ghar</b> is the culmination of the
                friendship, trust, respect and competencies of Anurag and
                Tabrez, and today they sit not on the opposite ends of the table
                but on the same side as co-founders.
              </p>
              <p>
                Launching a start-up dedicated to providing home interiors
                solutions to all Indian souls, which ever part of the globe they
                may be living in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersLore;
