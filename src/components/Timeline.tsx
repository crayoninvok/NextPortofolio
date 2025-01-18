"use client";

import { motion } from "framer-motion";
import { Chakra_Petch } from "next/font/google";
import { FaClock } from "react-icons/fa"; // Import time-related icon

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Timeline() {
  return (
    <motion.div
      className="w-full mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <h2
        className={`${chakrapetch.className} text-[35px] text-center font-bold text-white mb-6`}
      >
        Timeline of Studies
      </h2>
      <ol className="items-center sm:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-black rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <FaClock className="w-2.5 h-2.5 text-yellow-500 dark:text-blue-300" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              7 Senior High School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Graduated in 2017
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I completed my high school education at 7 Senior High School. This
              was where I first developed an interest in technology and started
              experimenting with computers and basic programming.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-black rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <FaClock className="w-2.5 h-2.5 text-cyan-500 dark:text-green-300" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              Sepuluh Nopember Institute of Technology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2017 - 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I pursued an Applied Bachelor's degree in Instrumentation
              Engineering at ITS Surabaya, where I learned about control
              systems, calibration, basic programming, and more. I started
              focusing on programming for my final project.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-black rounded-full ring-0 ring-white dark:bg-purple-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <FaClock className="w-2.5 h-2.5 text-green-500 dark:text-purple-300" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-white">
              Purwadhika Technology School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2024 - Present
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Currently, I am pursuing a full-stack web development program.
              This program has further expanded my knowledge of creating web
              projects from scratch until deployment, using new frameworks for
              building websites.
            </p>
          </div>
        </li>
      </ol>
    </motion.div>
  );
}
