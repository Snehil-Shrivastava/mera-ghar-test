import Image from "next/image";
import meraGharLogo from "@/public/mera-ghar-logo-cream-skeleton.svg";
import Link from "next/link";

import { navLinks } from "@/lib/data";

const Navbar = () => {
  const links = navLinks;
  return (
    <div className="shadow-sm font-raleway fixed top-0 inset-x-0 z-10 text-cream">
      {/* <div className="flex justify-center items-center gap-40 h-[7vh]"> */}
      <div className="flex justify-center items-center gap-40 h-[10vh]">
        <Link href="/" className="h-full flex items-center">
          {/* <Image src={meraGharLogo} alt="logo" width={260} /> */}
          <Image src={meraGharLogo} alt="logo" width={45} />
        </Link>
        <div className="flex gap-15 xl:text-lg">
          {links.map((link, index) => (
            <Link key={index} href={`${link.linkTo}`}>
              {link.linkTitle}
            </Link>
          ))}
        </div>
        <div className="bg-copper px-8 py-3 text-xs font-semibold">
          <button className="uppercase">Get a Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
