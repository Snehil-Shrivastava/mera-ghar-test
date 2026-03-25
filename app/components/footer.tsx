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
      <div className=" w-[90%] max-w-360 mx-auto flex flex-col">
        <div className="pt-20 pb-10 flex justify-between gap-20 max-xl:gap-10">
          <div className="flex flex-col gap-8 max-xl:gap-3 justify-between flex-[0.65]">
            <div className="flex gap-10 max-xl:gap-5 max-xl:flex-col">
              <div>
                <Image src={LogoCream} alt="" className="w-19 max-xl:w-12" />
              </div>
              <div className="text-lg max-xl:text-sm w-45">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 max-xl:gap-7">
              <Link href={"#"}>
                <Image src={facebook} alt="" className="max-xl:w-4" />
              </Link>
              <Link href={"#"}>
                <Image src={twitter} alt="" className="max-xl:w-4" />
              </Link>
              <Link href={"#"}>
                <Image src={instagram} alt="" className="max-xl:w-4" />
              </Link>
              <Link href={"#"}>
                <Image src={pinterest} alt="" className="max-xl:w-4" />
              </Link>
            </div>
          </div>
          <div className="flex gap-10 justify-between flex-1">
            <div className="flex flex-col gap-8">
              <span className="text-2xl max-xl:text-xl font-bold">
                Quick Links
              </span>
              <div className="flex flex-col gap-4 text-lg max-xl:text-sm">
                <Link href={"/"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Home</span>
                </Link>
                <Link href={"/about"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>About Us</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Mera Kitchen</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Mera Wardrobe</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Mera Cities</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-2xl max-xl:text-xl font-bold">
                Site Links
              </span>
              <div className="flex flex-col gap-4 text-lg max-xl:text-sm">
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Door</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Contact Us</span>
                </Link>
                <Link href={"/blog"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Blogs</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Testimonials</span>
                </Link>
                <Link href={"#"} className="flex gap-3">
                  <Image src={CaretRight} alt="" className="w-3" />
                  <span>Terms & Conditions</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-end flex-[0.65]">
            <span className="text-2xl max-xl:text-xl font-bold">
              Stay Tuned With Us
            </span>
            <div className="flex gap-8 max-xl:gap-4 w-65 max-xl:w-45">
              <Image src={pin} alt="" />
              <span className="text-lg max-xl:text-sm">
                Gomti Nagar | Hewett Road | Transport Nagar
              </span>
            </div>
            <Link
              href={"#"}
              className="flex gap-8 max-xl:gap-4 w-65 max-xl:w-45"
            >
              <Image src={envelope} alt="" />
              <span className="text-lg max-xl:text-sm">Hello@meraghar.com</span>
            </Link>
            <Link
              href={"#"}
              className="flex gap-8 max-xl:gap-4 w-65 max-xl:w-45"
            >
              <Image src={phone} alt="" />
              <span className="text-lg max-xl:text-sm">+91-8127300000</span>
            </Link>
          </div>
        </div>
        <div className="py-8 font-semibold text-center max-xl:text-sm border-t border-t-cream/50 uppercase">
          <span>All right Reserved - MERA GHAR</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
