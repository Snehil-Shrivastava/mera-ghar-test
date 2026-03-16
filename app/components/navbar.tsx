// "use client";

// import Image from "next/image";
// import meraGharLogoCream from "@/public/mera-ghar-logo-cream-skeleton.svg";
// import meraGharLogoCopper from "@/public/mera-ghar-logo-copper-skeleton.svg";
// import Link from "next/link";
// import { navLinks } from "@/lib/data";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; // <-- Import usePathname

// const Navbar = () => {
//   const links = navLinks;
//   const [scrolled, setScrolled] = useState(false);

//   // Get the current route
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     // If we are not on the home page, we don't need the scroll listener
//     if (!isHomePage) return;

//     const carousel = document.querySelector("#home-carousel");

//     const handleScroll = () => {
//       if (carousel) {
//         setScrolled(carousel.getBoundingClientRect().bottom <= 200);
//       } else {
//         // Fallback: trigger after 80px if no carousel id found
//         setScrolled(window.scrollY > 80);
//       }
//     };

//     // Run once on mount in case the user refreshes the page halfway scrolled down
//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage]); // Add isHomePage to dependency array

//   // The Navbar should have a solid background if it's NOT the home page,
//   // OR if it IS the home page and has been scrolled.
//   const isSolid = !isHomePage || scrolled;

//   return (
//     <div
//       className={`font-raleway fixed top-0 inset-x-0 z-10 transition-colors duration-300 ${
//         isSolid ? "bg-white text-copper" : "bg-transparent text-cream"
//       }`}
//     >
//       <div className="flex justify-center items-center gap-30 h-[10vh]">
//         <Link href="/" className={`h-full flex items-center`}>
//           <Image
//             src={isSolid ? meraGharLogoCopper : meraGharLogoCream}
//             alt="logo"
//             width={45}
//             className="transition-opacity duration-300"
//           />
//         </Link>
//         <div className="flex gap-15 xl:text-lg">
//           {links.map((link, index) => (
//             <Link key={index} href={`${link.linkTo}`}>
//               {link.linkTitle}
//             </Link>
//           ))}
//         </div>
//         <div
//           className={`px-8 py-3 text-xs font-semibold transition-colors duration-300 ${
//             isSolid ? "bg-cream" : "bg-copper"
//           }`}
//         >
//           <button className="uppercase">Get a Quotation</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import meraGharLogoCream from "@/public/mera-ghar-logo-cream-skeleton.svg";
import meraGharLogoCopper from "@/public/mera-ghar-logo-copper-skeleton.svg";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = navLinks;
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- Add mobile menu state

  // Get the current route
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const carousel = document.querySelector("#home-carousel");

    const handleScroll = () => {
      if (carousel) {
        setScrolled(carousel.getBoundingClientRect().bottom <= 200);
      } else {
        setScrolled(window.scrollY > 80);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // We enforce a solid background if the mobile menu is open,
  // so the text and logos are clearly visible when interacting with it.
  const isSolid = !isHomePage || scrolled || isMobileMenuOpen;

  return (
    <div
      className={`font-raleway fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isSolid ? "bg-white text-copper shadow-sm" : "bg-transparent text-cream"
      }`}
    >
      {/* Main Navbar Container */}
      {/* Added px-6 for mobile padding and justify-between for mobile layout */}
      <div className="flex justify-between xl:justify-center items-center px-15 xl:px-10 xl:max-[1380px]:gap-25 gap-30 h-[10vh] min-h-30.5">
        {/* Logo */}
        <Link
          href="/"
          className="h-full flex items-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src={isSolid ? meraGharLogoCopper : meraGharLogoCream}
            alt="logo"
            width={45}
            className="transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Links (Hidden on small screens) */}
        <div className="hidden xl:flex gap-15 xl:text-lg">
          {links.map((link, index) => (
            <Link key={index} href={`${link.linkTo}`}>
              {link.linkTitle}
            </Link>
          ))}
        </div>

        {/* Desktop Button (Hidden on small screens) */}
        <div
          className={`hidden xl:block px-8 py-3 text-xs font-semibold transition-colors duration-300 ${
            isSolid ? "bg-cream" : "bg-copper"
          }`}
        >
          <button className="uppercase cursor-pointer">Get a Quotation</button>
        </div>

        {/* Mobile Hamburger Button (Hidden on md+ screens) */}
        <button
          className="xl:hidden block focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute top-[9.96vh] left-0 w-full bg-white text-copper flex flex-col items-center gap-6 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-125 py-8 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={`${link.linkTo}`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
            className="text-lg font-medium"
          >
            {link.linkTitle}
          </Link>
        ))}
        <div className="px-8 py-3 text-sm font-semibold bg-cream mt-2">
          <button
            className="uppercase cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
