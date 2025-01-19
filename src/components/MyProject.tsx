import { Chakra_Petch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyProject() {
  return (
    <div className="justify-center items-center mt-20">
      <h1
        className={`${chakrapetch.className} text-[35px] text-center font-bold text-white mb-6`}
      >
        My Project
      </h1>
      <div className="flex gap-5">
        {/* React Portofolio */}
        <div className="max-w-sm bg-gray-800 text-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="mb-4">
            <Image
              src="/REACT.jpg"
              alt="REACT"
              width={400} // Adjust width
              height={300} // Adjust height
              className="rounded-md"
            />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">React Portofolio</h2>
          {/* Description */}
          <p className="text-gray-300 mb-6">
            React Portofolio is my first project using react vite frameworks and
          </p>
          {/* Button */}
          <Link
            href="https://dzaky-athariq-portofolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
              Enter
            </button>
          </Link>
        </div>
        {/* NSI */}
        <div className="max-w-sm bg-gray-800 text-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="mb-4">
            <Image
              src="/NSI.jpg"
              alt="Nautika Sentra Indonesia Logo"
              width={400} // Adjust width
              height={300} // Adjust height
              className="rounded-md"
            />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">Nautika Sentra Indonesia</h2>
          {/* Description */}
          <p className="text-gray-300 mb-6">
            NSI or Nautika Sentra Indonesia is a company profile project built
            with Next.js as the frontend framework, integrated with a CMS for
            content management and data fetching, including the Random User API.
            This website showcases marine services, specializing in navigation,
            communication, and VDR products. Additionally, NSI provides
            comprehensive vessel safety surveys and inspections, focusing on
            radiocommunication systems to ensure maritime compliance and safety.
          </p>
          {/* Button */}
          <Link
            href="https://nsi-profile.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
