"use client";

import Image from "next/image";
import meraGharLogoCream from "@/public/mera-ghar-logo-cream-skeleton.svg";
import meraGharLogoCopper from "@/public/mera-ghar-logo-copper-skeleton.svg";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useState, useEffect } from "react";

const Navbar = () => {
  const links = navLinks;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const carousel = document.querySelector("#home-carousel");

    const handleScroll = () => {
      if (carousel) {
        setScrolled(carousel.getBoundingClientRect().bottom <= 200);
      } else {
        // Fallback: trigger after 80px if no carousel id found
        setScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`shadow-sm font-raleway fixed top-0 inset-x-0 z-10 transition-colors duration-300 ${
        scrolled ? "bg-white text-copper" : "bg-transparent text-cream"
      }`}
    >
      <div className="flex justify-center items-center gap-40 h-[10vh]">
        <Link href="/" className={`h-full flex items-center`}>
          <Image
            src={scrolled ? meraGharLogoCopper : meraGharLogoCream}
            alt="logo"
            width={45}
            className="transition-opacity duration-300"
          />
        </Link>
        <div className="flex gap-15 xl:text-lg">
          {links.map((link, index) => (
            <Link key={index} href={`${link.linkTo}`}>
              {link.linkTitle}
            </Link>
          ))}
        </div>
        <div
          className={`px-8 py-3 text-xs font-semibold transition-colors duration-300 ${scrolled ? "bg-cream" : "bg-copper"}`}
        >
          <button className="uppercase">Get a Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
