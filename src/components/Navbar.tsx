"use client";

import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    window.requestAnimationFrame(() => {
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    });
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 backdrop-blur-lg bg-black/10 bg-opacity-50 text-white flex justify-between items-center transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-3">
          <Image src="/DJ.gif" alt="Logo" width={60} height={30} />
          <h1 className="italic text-[20px]">Porto<span className="text-red-500">folio</span></h1>
        </div>
        <div className="hidden md:flex gap-7 text-[20px]">
          <h1 className="cursor-pointer hover:text-teal-700">Home</h1>
          <h1 className="cursor-pointer hover:text-teal-700">About Me</h1>
          <h1 className="cursor-pointer hover:text-teal-700">Contact</h1>
        </div>
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white" size={30} />
          ) : (
            <FaBars className="text-white" size={30} />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-black bg-opacity-70 text-white md:hidden flex flex-col items-center py-4 space-y-4`}
      >
        <Link href={"/home"}>
          <h1 className="cursor-pointer hover:text-teal-700">Home</h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="cursor-pointer hover:text-teal-700">About Me</h1>
        </Link>
        <Link href={"/contact"}>
          <h1 className="cursor-pointer hover:text-teal-700">Contact</h1>
        </Link>
      
      </div>
    </>
  );
}
