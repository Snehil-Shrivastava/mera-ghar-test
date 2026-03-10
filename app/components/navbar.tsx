import Image from "next/image";
import meraGharLogo from "@/public/mera-ghar-logo-inverted-full.png";
import Link from "next/link";

import { navLinks } from "@/lib/data";

const Navbar = () => {
  const links = navLinks;
  return (
    <div className="shadow-md font-raleway">
      <div className="flex justify-center items-center gap-40 h-[7vh]">
        <div className="h-full flex items-center">
          <Image src={meraGharLogo} alt="logo" width={260} />
        </div>
        <div className="flex gap-15 font-semibold text-brand-black">
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
