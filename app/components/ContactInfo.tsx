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
        {/* <h4 className="text-brand-green font-semibold text-lg uppercase">
          our office
        </h4>
        <div className="flex flex-col gap-6">
          <div className="bg-neutral-300 w-full h-70"></div>
          <p className="opacity-75">
            Have a question about pricing, plan, or anything about us? Fill out
            the or call us, and our expert will give you a better suggestion.
          </p>
        </div> */}
        {/* <div className="bg-neutral-300 w-full h-70 relative max-lg:hidden">
          <div className="capitalize bg-white relative h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28475.19649031269!2d80.9868825!3d26.8590437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c09c60f6b3%3A0xb59bb20be582a998!2sKrishna%20Ply%20%26%20Hardwares%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774862567296!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
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
                <span className="max-sm:text-xs">
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
                <span className="max-sm:text-xs">+91-8127300000</span>
              </Link>
              <Link
                href={"mailto:info@meraghar.solutions"}
                className="flex gap-4 items-start"
              >
                <span className="max-sm:w-5">
                  <Email />
                </span>
                {/* <Image src={email} alt="" className="max-sm:w-5" /> */}
                <span className="max-sm:text-xs">info@meraghar.solutions</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="bg-neutral-300 w-full h-70 relative p-6">
          <div className="capitalize bg-white px-6 py-2 absolute">
            View large map
          </div>
        </div> */}
        {/* <div className="bg-neutral-300 w-full h-70 relative lg:hidden">
          <div className="capitalize bg-white relative h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28475.19649031269!2d80.9868825!3d26.8590437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c09c60f6b3%3A0xb59bb20be582a998!2sKrishna%20Ply%20%26%20Hardwares%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774862567296!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
