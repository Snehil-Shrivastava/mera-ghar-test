import Image from "next/image";
import Link from "next/link";

import location from "@/public/location.svg";
import phone from "@/public/phone.svg";
import email from "@/public/email.svg";

const ContactInfo = () => {
  return (
    <div className="flex-[0.9] flex flex-col gap-8">
      <h1 className="capitalize text-brand-brown text-[52px]/[62px] max-xl:text-[40px]/[50px] font-bold">
        Talk to the expert and know us better
      </h1>
      <p className="text-lg opacity-75">
        Have a question about pricing, plan, or anything about us? Fill out the
        or call us, and our expert will give you a better suggestion.
      </p>
      <div className="flex flex-col gap-10">
        <h4 className="text-brand-green font-semibold text-lg uppercase">
          our office
        </h4>
        <div className="flex flex-col gap-6">
          <div className="bg-neutral-300 w-full h-70"></div>
          <p className="opacity-75">
            Have a question about pricing, plan, or anything about us? Fill out
            the or call us, and our expert will give you a better suggestion.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-10">
            <h3 className="text-brand-brown font-bold text-xl">Display</h3>
            <div className="flex flex-col gap-5">
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={location} alt="" />
                <span>Akshya Nagar 1st Block 1st Cross, Rammurthy </span>
              </Link>
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={phone} alt="" />
                <span>+62345188368</span>
              </Link>
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={email} alt="" />
                <span>info@meraghar.com</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <h3 className="text-brand-brown font-bold text-xl">Office</h3>
            <div className="flex flex-col gap-5">
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={location} alt="" />
                <span>Akshya Nagar 1st Block 1st Cross, Rammurthy </span>
              </Link>
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={phone} alt="" />
                <span>+62345188368</span>
              </Link>
              <Link href={"#"} className="flex gap-4 items-start">
                <Image src={email} alt="" />
                <span>info@meraghar.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
