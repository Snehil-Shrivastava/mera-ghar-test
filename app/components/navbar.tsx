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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get the current route
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.querySelector("#page-hero");

    const handleScroll = () => {
      if (hero) {
        setScrolled(hero.getBoundingClientRect().bottom <= 200);
      } else {
        setScrolled(window.scrollY > 80);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // We enforce a solid background if the mobile menu is open,
  // so the text and logos are clearly visible when interacting with it.
  const isSolid = scrolled || isMobileMenuOpen;

  return (
    <div
      className={`font-raleway fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isSolid ? "bg-white text-copper shadow-sm" : "bg-transparent text-cream"
      }`}
    >
      {/* Main Navbar Container */}
      <div className="flex justify-between xl:max-1600p:justify-center items-center px-15 xl:px-0 xl:max-[1380px]:gap-25 gap-30 h-[10vh] min-h-30.5 max-w-360 mx-auto">
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
        <div className="hidden xl:flex gap-15 xl:text-base text-sm">
          <Link href={`/about`} className="flex items-center nav-link relative">
            About us
          </Link>
          <Link
            href={`/founders`}
            className="flex items-center nav-link relative"
          >
            Founders
          </Link>
          <Link
            href={`#`}
            className="flex flex-col text-center nav-link relative"
          >
            <span>Mera</span>
            <span>Kitchen</span>
          </Link>
          <Link
            href={`#`}
            className="flex flex-col text-center nav-link relative"
          >
            <span>Mera</span>
            <span>Wardrobe</span>
          </Link>
          <Link
            href={`#`}
            className="flex flex-col text-center nav-link relative"
          >
            <span>Mera</span>
            <span>Door</span>
          </Link>
          {/* <Link href={`#`} className="flex items-center nav-link relative">
            Cities
          </Link> */}
          <Link
            href={`/contact-us`}
            className="flex items-center nav-link relative"
          >
            Contact Us
          </Link>
          <Link href={`/blog`} className="flex items-center nav-link relative">
            Blogs
          </Link>
          <Link href={`#`} className="flex items-center nav-link relative">
            Testimonials
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
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
            ? "max-h-140 pt-8 pb-12 opacity-100"
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
      </div>
    </div>
  );
};

export default Navbar;
