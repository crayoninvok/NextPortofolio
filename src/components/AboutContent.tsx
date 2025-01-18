"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Chakra_Petch } from "next/font/google";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Image Section */}
        <div className="flex-shrink-0 cursor-pointer" onClick={openModal}>
          <Image
            src="/jaki01.jpg"
            alt="Dzaky Athariq Ferreira"
            width={208}
            height={208}
            className="object-cover border-2 border-white rounded-lg glow-effect-green"
          />
        </div>

        {/* About Text Section */}
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

      {/* Modal Section */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-lg p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <Image
              src="/jaki01.jpg"
              alt="Dzaky Athariq Ferreira"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
