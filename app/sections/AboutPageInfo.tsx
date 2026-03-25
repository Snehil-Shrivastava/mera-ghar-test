import Image from "next/image";

import wardrobe1 from "@/public/wardrobe_1.webp";
import kitchen3 from "@/public/kitchen_3.webp";

const AboutPageInfo = () => {
  return (
    <div>
      <div className="py-20 w-[90%] max-w-360 mx-auto relative flex gap-15">
        <div className="flex-1">
          <div className="pb-8 border-b border-b-neutral-300 flex flex-col gap-5">
            <h4 className="uppercase font-semibold text-copper text-sm">
              How it works?
            </h4>
            <h2 className="capitalize text-brand-brown font-bold text-[40px]">
              Welcome to mera ghar
            </h2>
          </div>
          <div className="pt-8 font-openSans flex flex-col gap-8 text-neutral-700">
            <p>
              <b className="font-bold">Mera Ghar</b> represents an emotion.
            </p>
            <p>
              Spoken in any language, it captures the essence of a home - the
              memories, the love and care, the comfort, the spaces, and the
              nostalgia. Every home is built with a dream and deep involvement
              for the comfort and convenience of the loved ones who live in it
              and share life together. At <b className="font-bold">Mera Ghar</b>
              , we craft precision-based, customised home interior solutions,
              including{" "}
              <b className="font-bold">kitchens, wardrobes and doors.</b>
            </p>
            <p>
              <b className="font-bold">Mera Ghar</b> carefully builds with
              materials that last, from designs that adapt to solutions that
              respect both emotions and functionality. For us,{" "}
              <b className="font-bold">
                listening comes before suggesting and customising comes before
                standardising.
              </b>
            </p>
          </div>
        </div>
        <div className="flex-1 relative flex justify-end">
          {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-120"> */}
          <div className="w-100 h-120 relative">
            <Image src={wardrobe1} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-cream">
        <div className="w-[90%] max-w-360 mx-auto py-10 relative flex">
          <div className="flex-1">
            <div className="text-brand-brown flex gap-10 justify-between">
              <h4 className="font-bold border-l-5 border-l-brand-brown pl-5">
                <span>Not copied</span>
                <br />
                <span>from catalogues,</span>
              </h4>
              <h4 className="font-bold border-l-5 border-l-brand-brown pl-5">
                <span>Not forced</span>
                <br />
                <span>by trends.</span>
              </h4>
              <h4 className="font-bold border-l-5 border-l-brand-brown pl-5">
                <span>Not rushed just</span>
                <br />
                <span>to meet deadlines.</span>
              </h4>
            </div>
            <div className="pt-10">
              <p>
                But shaped by{" "}
                <b className="font-bold">
                  your preferences, your taste. your comfort and your needs.
                </b>{" "}
                Transforming spaces not just into forms,{" "}
                <b className="font-bold">but into your personal spaces.</b>
              </p>
            </div>
          </div>
          {/* <div className="absolute -top-50 w-90 h-90 right-42 border-15 border-white">
            <Image src={kitchen3} alt="" fill className="object-cover" />
          </div> */}
          <div className="relative flex-1">
            <div className="absolute -top-70 left-10 w-90 h-90 border-15 border-white">
              <Image src={kitchen3} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageInfo;
