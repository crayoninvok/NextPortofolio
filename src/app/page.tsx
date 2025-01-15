"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 bg-center">
      <div className="text-center text-white px-6 md:px-8 max-w-3xl w-full">
        {/* Static DZ loader with rotating effect */}
        <div className="loader-container mb-8 flex justify-center items-center">
          <div className="loader">
            <span className="loader-text">DZ</span>
          </div>
        </div>

        {/* Welcome message */}
        <motion.h1
          className="text-4xl font-bold glowing-text-green mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Description message */}
        <motion.h1
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Im a passionate web developer specializing in front-end technologies
          like React, Next.js, and Tailwind CSS. I enjoy creating beautiful and
          interactive websites that provide an amazing user experience.
        </motion.h1>

        {/* About section link */}
        <motion.a
          href="#about"
          className="text-teal-400 hover:text-teal-700 text-lg cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Learn more about me
        </motion.a>
      </div>
    </div>
  );
}
