"use client";

import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";
import { motion } from "framer-motion";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 backdrop-blur-lg bg-black/10 text-white flex justify-between items-center transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <div className="flex items-center space-x-3">
          <Image src="/DJ.gif" alt="Logo" width={60} height={30} />
          <h1 className={`${chakrapetch.className} italic text-[20px]`}>
            Porto<span className="text-teal-300">folio</span>
          </h1>
        </div>
        <motion.div
          className="hidden md:flex gap-7 text-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/">
            <motion.h1
              className={`${chakrapetch.className} cursor-pointer hover:text-teal-700 bg-transparent p-2 hover:bg-white rounded-lg`}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.h1>
          </Link>
          <Link href="/about">
            <motion.h1
              className={`${chakrapetch.className} cursor-pointer hover:text-teal-700 bg-transparent p-2 hover:bg-white rounded-lg`}
              whileHover={{ scale: 1.1 }}
            >
              About Me
            </motion.h1>
          </Link>
          <Link href="/contact">
            <motion.h1
              className={`${chakrapetch.className} cursor-pointer hover:text-teal-700 bg-transparent p-2 hover:bg-white rounded-lg`}
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.h1>
          </Link>
        </motion.div>
        <motion.div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white" size={30} />
          ) : (
            <FaBars className="text-white" size={30} />
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-black bg-opacity-70 text-white md:hidden flex flex-col items-center py-4 space-y-4`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href={"/"}>
          <motion.h1
            className={`${chakrapetch.className} cursor-pointer hover:text-teal-700`}
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.h1>
        </Link>
        <Link href={"/about"}>
          <motion.h1
            className={`${chakrapetch.className} cursor-pointer hover:text-teal-700`}
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.h1>
        </Link>
        <Link href={"/contact"}>
          <motion.h1
            className={`${chakrapetch.className} cursor-pointer hover:text-teal-700`}
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.h1>
        </Link>
      </motion.div>
    </>
  );
}
