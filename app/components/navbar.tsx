import Image from "next/image";
import meraGharLogo from "@/public/mera-ghar-logo-inverted.png";
import Link from "next/link";

import { navLinks } from "@/lib/data";

const Navbar = () => {
  const links = navLinks;
  return (
    <div className="shadow-md font-raleway fixed top-0 inset-x-0 z-10 bg-white">
      {/* <div className="flex justify-center items-center gap-40 h-[7vh]"> */}
      <div className="flex justify-center items-center gap-40 h-[10vh]">
        <Link href="/" className="h-full flex items-center">
          {/* <Image src={meraGharLogo} alt="logo" width={260} /> */}
          <Image src={meraGharLogo} alt="logo" width={140} />
        </Link>
        <div className="flex gap-15 font-semibold text-brand-black xl:text-lg">
          {links.map((link, index) => (
            <Link key={index} href={`${link.linkTo}`}>
              {link.linkTitle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
