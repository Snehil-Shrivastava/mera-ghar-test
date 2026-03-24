import Image from "next/image";

import door2 from "@/public/door_2.webp";
import vision from "@/public/vision.svg";
import mission from "@/public/mission.svg";
import purpose from "@/public/purpose.svg";
import DashedLine from "../components/DashedLine";

const AboutPageGoal = () => {
  return (
    <div className="py-20 bg-cream">
      <div className="w-[90%] max-w-480 mx-auto flex flex-col gap-20 relative">
        <div className="flex flex-row-reverse gap-30 justify-between">
          <div className="relative h-full w-full flex-1">
            <Image src={door2} alt="" className="object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-4 items-end">
            <div>
              <Image src={vision} alt="" />
            </div>
            <h3 className="text-2xl font-bold capitalize">vision</h3>
            <p className="text-end text-base/loose">
              To become the premier and most trusted Indian home interiors
              brand, crafting premium, personalised home interiors that respect
              both emotion and functionality while being accessible to everyone.
            </p>
          </div>
        </div>
        <div className="flex gap-30 justify-between">
          <div className="relative h-120 w-full flex-1">
            <Image src={door2} alt="" className="object-cover h-full" />
          </div>
          <div className="flex-1 flex flex-col gap-2 items-start text-base/loose">
            <div>
              <Image src={mission} alt="" />
            </div>
            <h3 className="text-2xl font-bold capitalize">mission</h3>
            <p className="text-start">
              To offer a curated ecosystem of materials and design-led solutions
              that combine:
            </p>
            <span className="font-bold">Honest Value</span>
            <span className="font-bold">Long-term Quality</span>
            <span className="font-bold">
              Contemporary & Evolving Design Choices
            </span>
            <span className="font-bold">Practical Functionality</span>
            <span className="font-bold">Personal Relevance</span>
            <span className="font-bold">Emotional Connection</span>
            <span className="font-bold">Operational Excellence</span>
            <p>
              Enabling every customer to build a home that is truly their abode.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-30 justify-between">
          <div className="relative h-100 w-full flex-1">
            <Image src={door2} alt="" className="object-cover h-full" />
          </div>
          <div className="flex-1 flex flex-col gap-4 items-end text-base/loose">
            <div>
              <Image src={purpose} alt="" />
            </div>
            <h3 className="text-2xl font-bold capitalize">purpose</h3>
            <p className="text-end">
              To facilitate people in building their homes by providing products
              and solutions that reflect their preferences, taste, comfort, and
              needs. By utilising our vast experience to help them choose
              optimal products specific to their requirements and to provide
              curated design choices aligned with their aesthetics. <br />
              Bringing precision to all our products through{" "}
              <b className="font-bold">
                state-of-the-art European machines
              </b>{" "}
              and a{" "}
              <b className="font-bold">best-in-class manufacturing facility.</b>{" "}
              Eliminating the dependence on intermediaries and{" "}
              <b className="font-bold">
                minimising the involvement of manual processes.
              </b>
            </p>
          </div>
        </div>
        <div className="absolute h-full left-1/2 -translate-x-1/2">
          <DashedLine stroke="#B5B5B5B2" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageGoal;
