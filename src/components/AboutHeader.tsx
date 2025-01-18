"use client";

import { motion } from "framer-motion";
import { Chakra_Petch } from "next/font/google";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutHeader() {
  return (
    <motion.h1
      className={`${chakrapetch.className} text-4xl font-bold mb-6 mt-[5vh]`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      About Me
    </motion.h1>
  );
}
