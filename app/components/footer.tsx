import Image from "next/image";

import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";
import pinterest from "@/public/pinterest.svg";

import pin from "@/public/map-pin.svg";
import envelope from "@/public/envelope.svg";
import phone from "@/public/phone-square.svg";

import CaretRight from "@/public/caret-right.svg";

import LogoCream from "@/public/mera-ghar-logo-cream-skeleton.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-copper font-raleway text-white">
      <div className=" w-[90%] max-lg:w-[85%] max-w-360 mx-auto flex flex-col">
        <div className="pt-20 max-md:pt-15 pb-10 max-md:pb-6 flex max-md:flex-col justify-between gap-20 max-xl:gap-15 max-md:gap-8">
          <div className="flex flex-col gap-8 max-xl:gap-6 justify-between max-lg:justify-start">
            <div className="flex gap-10 max-xl:gap-5 max-xl:flex-col max-lg:flex-[0.7] max-lg:justify-between max-md:items-center">
              <div>
                <Image
                  src={LogoCream}
                  alt=""
                  className="w-19 max-xl:w-12 max-lg:w-20"
                />
              </div>
              <div className="text-lg max-xl:text-sm w-45 max-md:text-center">
                <p>
                  Crafting premium, personalised home interiors that respect
                  both emotion and functionality.
                </p>
              </div>
            </div>
            <div className="flex items-center max-md:justify-center gap-5 max-xl:gap-7 max-md:hidden">
              <Link
                href={"https://www.facebook.com/KrishnaPlyAndHardwares"}
                target="_blank"
              >
                <Image src={facebook} alt="" className="max-xl:w-4" />
              </Link>
              {/* <Link href={"#"}>
                <Image src={twitter} alt="" className="max-xl:w-4" />
              </Link> */}
              <Link
                href={"https://www.instagram.com/meraghar.solutions"}
                target="_blank"
              >
                <Image src={instagram} alt="" className="max-xl:w-4" />
              </Link>
              {/* <Link href={"#"}>
                <Image src={pinterest} alt="" className="max-xl:w-4" />
              </Link> */}
            </div>
          </div>
          <div className="flex-1 flex max-lg:flex-col gap-20 max-xl:gap-20 max-lg:gap-10 justify-between">
            <div className="flex gap-10 justify-between 1440p:justify-around lg:max-xl:justify-around flex-1">
              <div className="flex flex-col gap-8">
                <span className="text-2xl max-xl:text-xl font-bold">
                  Quick Links
                </span>
                <div className="flex flex-col gap-4 text-lg max-xl:text-sm">
                  <Link href={"/about"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>About Us</span>
                  </Link>
                  <Link href={"/mera-kitchen"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Mera Kitchen</span>
                  </Link>
                  <Link href={"/mera-wardrobe"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Mera Wardrobe</span>
                  </Link>
                  <Link href={"/mera-door"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Mera Door</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-2xl max-xl:text-xl font-bold">
                  Site Links
                </span>
                <div className="flex flex-col gap-4 text-lg max-xl:text-sm">
                  <Link href={"/blog"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Blogs</span>
                  </Link>
                  {/* <Link href={"/testimonials"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Testimonials</span>
                  </Link> */}
                  <Link href={"/contact-us"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Contact Us</span>
                  </Link>
                  <Link href={"/terms-and-conditions"} className="flex gap-3">
                    <Image src={CaretRight} alt="" className="w-3 max-lg:w-2" />
                    <span>Terms & Conditions</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-end max-lg:items-start">
              <div className="flex flex-col gap-10 max-lg:gap-6 max-lg:w-full">
                <span className="text-2xl max-xl:text-xl font-bold">
                  Stay Tuned With Us
                </span>
                <div className="flex flex-col gap-10 max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-6 max-md:gap-3">
                  <Link
                    href={"https://maps.app.goo.gl/bYx9HXwFzmqd6R2f9"}
                    target="_blank"
                    className="flex gap-6 max-xl:gap-4 w-65 max-xl:w-45 max-md:w-auto"
                  >
                    <Image src={pin} alt="" className="max-xl:w-3.5 w-4" />
                    <span className="text-lg max-xl:text-sm">
                      Gomti Nagar, Lucknow
                    </span>
                  </Link>
                  <Link
                    href={"mailto:info@meraghar.solutions"}
                    className="flex gap-6 max-xl:gap-4 w-65 max-xl:w-45 max-md:w-auto"
                  >
                    <Image src={envelope} alt="" className="max-xl:w-3.5 w-4" />
                    <span className="text-lg max-xl:text-sm">
                      info@meraghar.solutions
                    </span>
                  </Link>
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=%2B918127300000&text&type=phone_number&app_absent=0"
                    }
                    target="_blank"
                    className="flex gap-6 max-xl:gap-4 w-65 max-xl:w-45 max-md:w-auto"
                  >
                    <Image src={phone} alt="" className="max-xl:w-3.5 w-4" />
                    <span className="text-lg max-xl:text-sm">
                      +91-8127300000
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center max-md:justify-center gap-5 max-xl:gap-7 md:hidden">
            <Link
              href={"https://www.facebook.com/KrishnaPlyAndHardwares"}
              target="_blank"
            >
              <Image src={facebook} alt="" className="max-xl:w-4" />
            </Link>
            {/* <Link href={"#"}>
              <Image src={twitter} alt="" className="max-xl:w-4" />
            </Link> */}
            <Link
              href={"https://www.instagram.com/meraghar.solutions"}
              target="_blank"
            >
              <Image src={instagram} alt="" className="max-xl:w-4" />
            </Link>
            {/* <Link href={"#"}>
              <Image src={pinterest} alt="" className="max-xl:w-4" />
            </Link> */}
          </div>
        </div>
        <div className="py-8 font-semibold text-center max-xl:text-sm max-md:text-[10px] border-t border-t-cream/50 uppercase">
          <span>All rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
