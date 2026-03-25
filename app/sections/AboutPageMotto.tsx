import Image from "next/image";

import interior1 from "@/public/interior_1.webp";

const AboutPageMotto = () => {
  return (
    <div className="py-20">
      <div className="w-[90%] max-w-360 mx-auto relative flex gap-15">
        <div className="flex-1">
          <div className="pb-8 border-b border-b-neutral-300 flex flex-col gap-5">
            <h4 className="uppercase font-semibold text-copper text-sm">
              our motto
            </h4>
            <h2 className="capitalize text-brand-brown font-bold text-[40px]">
              Mera Ghar, &apos;Dil Se&apos;
            </h2>
          </div>
          <div className="pt-8 font-openSans flex flex-col gap-8 text-neutral-700">
            <p>This motto is the cornerstone of everything we do.</p>
            <p>
              We listen, <b className="font-bold">Dil Se.</b> and we suggest,{" "}
              <b className="font-bold">Dil Se.</b>
              <br />
              We curate, <b className="font-bold">Dil se</b>, and we craft,{" "}
              <b className="font-bold">Dil se.</b>
            </p>
            <p>
              We go deep to find solutions so that{" "}
              <b className="font-bold">
                your house transforms into the home of your dreams,
              </b>
              thoughtfully built especially for you. Where every room carries{" "}
              <b className="font-bold">
                your impression, your expression and a resonance with your true
                identity.
              </b>{" "}
              Life and home go hand in hand, and with us,{" "}
              <b className="font-bold">
                your home becomes a representation of who you are and what you
                aspire to be.
              </b>
            </p>
          </div>
        </div>
        <div className="flex-1">
          {/* <div className="absolute right-0 -top-5 w-130 h-70"> */}
          <div className="relative w-130 h-70">
            <Image src={interior1} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageMotto;
