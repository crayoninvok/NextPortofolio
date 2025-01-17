"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Chakra_Petch } from "next/font/google";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white min-h-screen flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <motion.h1
        className={`${chakrapetch.className} text-4xl font-bold mb-6`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Flex Container for Image and About Me */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Photo Section */}
        <div className="flex-shrink-0 cursor-pointer" onClick={openModal}>
          <Image
            src="/jaki01.jpg"
            alt="Dzaky Athariq Ferreira"
            width={208}
            height={208}
            className="object-cover border-2 border-white rounded-lg glow-effect-green"
          />
        </div>

        {/* About Me Section */}
        <motion.div
          className="flex-1 max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className={`${chakrapetch.className} text-xl mb-8`}>
            Hello! My name is Dzaky Athariq Ferreira, and I’m a full-stack web
            developer with a strong focus on front-end technologies like React,
            Next.js, and Tailwind CSS. I love creating interactive, visually
            appealing websites that deliver exceptional user experiences. On the
            back end, I have expertise in technologies such as Express.js,
            PostgreSQL, and other modern tools, allowing me to build robust and
            efficient server-side solutions. With a keen eye for detail and a
            passion for continuous learning, I strive to develop innovative
            projects that solve real-world problems and make a positive impact.
          </p>
        </motion.div>
      </motion.div>

      {/* Timeline of Studies Section */}
      <motion.div
        className="w-full mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2
          className={`${chakrapetch.className} text-3xl text-center font-bold mb-6`}
        >
          Timeline of Studies
        </h2>

        {/* Flowbite Timeline */}
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                7 Senior High School
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Graduated in 2017
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I completed my high school education at 7 Senior High School.
                This was where I first developed an interest in technology and
                started experimenting with computers and basic programming.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-green-100 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sepuluh Nopember Institute of Technology
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2017 - 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I pursued a Applied Bachelor's degree in Instrumentation
                Engineering at ITS Surabaya, where I learned about control
                system, calibration, basic programming, and more. I started
                focusing programming for my final project.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full ring-0 ring-white dark:bg-purple-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Purwadhika Technology School
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2024 - Present
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Currently, I am pursuing a fullstack web development program.
                This program has further expanded my knowledge of creating web
                from scratch until deployment, and also in this program i use
                the new frameworks for creating website.
              </p>
            </div>
          </li>
        </ol>
      </motion.div>
      {/* Technologies Marquee Section */}
      <motion.div
        className="w-[50vw] mt-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2
          className={`${chakrapetch.className} text-3xl text-center font-bold mb-6`}
        >
          Technologies I Use
        </h2>
        <Marquee
          speed={35}
          gradient={false}
          className="bg-gray-800 p-4 rounded-lg flex items-center"
        >
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <FaReact className="text-blue-500 text-2xl mr-2" />
            React
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <SiNextdotjs className="text-gray-300 text-2xl mr-2" />
            Next.js
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <SiTypescript className="text-blue-400 text-2xl mr-2" />
            TypeScript
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <IoLogoJavascript className="text-yellow-300 text-2xl mr-2" />
            Javascript
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <SiTailwindcss className="text-blue-300 text-2xl mr-2" />
            Tailwind CSS
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <FaNodeJs className="text-green-500 text-2xl mr-2" />
            Node.js
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <SiPrisma className="text-indigo-400 text-2xl mr-2" />
            Prisma
          </div>
          <div className="mx-4 text-xl bg-gray-700 p-2 rounded-lg flex items-center">
            <FaDatabase className="text-yellow-500 text-2xl mr-2" />
            PostgreSQL
          </div>
        </Marquee>
      </motion.div>


      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black p-4 rounded-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <Image
              src="/jaki01.jpg"
              alt="Dzaky Athariq Ferreira"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-600 hover:bg-gray-700 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
