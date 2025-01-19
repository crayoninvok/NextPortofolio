"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { IoBarChart, IoLogoJavascript } from "react-icons/io5";
import { Chakra_Petch } from "next/font/google";
import { IoCog } from "react-icons/io5";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const icons = [
  {
    component: <FaReact size={40} className="text-blue-400" />,
    label: "React",
  },
  {
    component: <FaNodeJs size={40} className="text-green-600" />,
    label: "Node.js",
  },
  {
    component: <FaDatabase size={40} className="text-orange-500" />,
    label: "Database",
  },
  {
    component: <SiNextdotjs size={40} className="text-black" />,
    label: "Next.js",
  },
  {
    component: <SiPrisma size={40} className="text-blue-500" />,
    label: "Prisma",
  },
  {
    component: <SiTypescript size={40} className="text-blue-700" />,
    label: "TypeScript",
  },
  {
    component: <SiTailwindcss size={40} className="text-teal-400" />,
    label: "Tailwind CSS",
  },
  {
    component: <IoLogoJavascript size={40} className="text-yellow-400" />,
    label: "JavaScript",
  },
  {
    component: <IoCog size={40} className="text-gray-500" />,
    label: "PLC Logic",
  },
  {
    component: <IoBarChart size={40} className="text-orange-600" />,
    label: "MatLab",
  },
];

export default function SkillsMarque() {
  return (
    <motion.div
      className="w-full max-w-6xl px-4 mt-20 mx-auto shadow-lg rounded-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className={`${chakrapetch.className} text-3xl text-center font-bold text-white mb-6`}>
        Technologies I Use Now
      </h2>
      <Marquee
        speed={35}
        gradient={false}
        className="bg-gray-800 p-4 rounded-lg flex items-center"
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-6 text-white"
          >
            {icon.component}
            <span className="mt-2 text-sm">{icon.label}</span>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}
