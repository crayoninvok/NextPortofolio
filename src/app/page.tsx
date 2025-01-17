"use client";
import { motion } from "framer-motion";
import { Chakra_Petch } from "next/font/google";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 bg-center">
      <div className="flex justify-between items-center px-6 md:px-8 max-w-6xl w-full">
        {/* Static DZ loader on the left */}
        <div className="loader-container w-full h-full flex justify-center items-center">
          <div className="loader h-[100px] w-[100px]">
            <span className={`${chakrapetch.className} loader-text`}>DZ</span>
          </div>
        </div>

        {/* Text content on the right */}
        <div className="text-right text-white max-w-3xl w-full">
          {/* Welcome message */}
          <motion.h1
            className={`${chakrapetch.className} text-4xl font-bold glowing-text-green mb-4`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Description message */}
          <motion.h1
            className={`${chakrapetch.className} text-lg mb-6`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Im a passionate full-stack web developer specializing in front-end
            technologies like React, Next.js, and Tailwind CSS. I enjoy creating
            beautiful and interactive websites that provide an amazing user
            experience.
          </motion.h1>
          {/* About section link */}
          <motion.a
            href="/about"
            className="text-teal-400 hover:text-teal-700 text-lg cursor-pointer h-10 bg-white rounded-lg w-full p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Learn more about me
          </motion.a>
        </div>
      </div>
    </div>
  );
}
