import Image from "next/image";
import Link from "next/link";

import Location from "@/public/location_copper";
import Phone from "@/public/phone_copper";
import Email from "@/public/email_copper";
import ContactForm from "./ContactForm";

import contactImg from "@/public/contact-us-img.webp";

const ContactInfo = () => {
  return (
    <div className="flex-[0.9] flex flex-col gap-8">
      <h1 className="capitalize text-brand-brown text-[52px]/[62px] max-xl:text-[40px]/[50px] max-sm:text-4xl font-bold">
        Let&apos;s create your lifespaces - Dil Se
      </h1>
      <p className="text-lg opacity-75">
        Call or visit us to visualize your perfect Kitchen, Wardrobe, Doors.
      </p>
      <div className="flex flex-col gap-10">
        <div>
          <Image src={contactImg} alt="" className="object-contain" />
        </div>
        <div className="lg:hidden">
          <ContactForm />
        </div>
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Link
                href={"https://maps.app.goo.gl/bYx9HXwFzmqd6R2f9"}
                target="_blank"
                className="flex gap-4 items-start"
              >
                <span className="max-sm:w-5">
                  <Location />
                </span>
                {/* <Image src={location} alt="" className="max-sm:w-5" /> */}
                <span className="max-sm:text-sm">
                  TC 14, 6th floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar
                  Pradesh 226010{" "}
                </span>
              </Link>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=%2B918127300000&text&type=phone_number&app_absent=0"
                }
                target="_blank"
                className="flex gap-4 items-start"
              >
                <span className="max-sm:w-5">
                  <Phone />
                </span>
                {/* <Image src={phone} alt="" className="max-sm:w-5" /> */}
                <span className="max-sm:text-sm">+91-8127300000</span>
              </Link>
              <Link
                href={"mailto:info@meraghar.solutions"}
                className="flex gap-4 items-start"
              >
                <span className="max-sm:w-5">
                  <Email />
                </span>
                {/* <Image src={email} alt="" className="max-sm:w-5" /> */}
                <span className="max-sm:text-sm">info@meraghar.solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
