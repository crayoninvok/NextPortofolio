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
    <div className="justify-center items-center mt-20 px-4">
      <h1
        className={`${chakrapetch.className} text-[35px] text-center font-bold text-white mb-6`}
      >
        My Project
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* PALKA */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          {/* Image Section */}
          <div className="mb-4">
            <Image
              src="/palka.jpg"
              alt="PALKA"
              width={400}
              height={300}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">
            Marinelec Fire Alarm Service and Maintenance
          </h2>
          {/* Description */}
          <p className="text-gray-300 mb-6 flex-grow">
            Service and maintenance of the fire alarm system on the PELNI vessel
            KM.AWU. This project was a joint operation between my former
            company, Palka Naga Marine, and PT. Pelni Persero. Our
            responsibilities included repairing the fire alarm system, manually
            inspecting over 100 sensors, and replacing faulty wiring to ensure
            the vessel's safety.
          </p>
        </div>
        {/* React Portfolio */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/REACT.jpg"
              alt="React Portfolio"
              width={400}
              height={300}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">React Portfolio</h2>
          <p className="text-gray-300 mb-6 flex-grow">
            React Portfolio is my first project using React and Vite frameworks,
            designed to showcase my skills and projects as a developer. This
            portfolio features a clean and responsive UI, leveraging modern
            JavaScript libraries and tools. It includes dynamic sections for
            personal information, projects, skills, and contact details, all
            optimized for fast loading and smooth user experience. The project
            was a great learning experience, allowing me to explore advanced
            React concepts and deploy a live application effectively.
          </p>
          <div className="mt-auto">
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
        </div>
        {/* NSI */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/NSI.jpg"
              alt="NSI"
              width={400}
              height={300}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Nautika Sentra Indonesia</h2>
          <p className="text-gray-300 mb-6 flex-grow">
            NSI or Nautika Sentra Indonesia is a company profile project built
            with Next.js as the frontend framework, integrated with a CMS for
            content management and data fetching, including the Random User API.
            This website showcases marine services, specializing in navigation,
            communication, and VDR products. Additionally, NSI provides
            comprehensive vessel safety surveys and inspections, focusing on
            radiocommunication systems to ensure maritime compliance and safety.
          </p>
          <div className="mt-auto">
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
        {/* TIKO */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="/tikohome.jpg"
              alt="TIKO"
              width={400}
              height={300}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">TIKO</h2>
          <p className="text-gray-300 mb-6 flex-grow">
            TIKO or Tiket Konser is a collaborative project with my partner in
            purwadhika school.The web-based project aimed at delivering a modern
            and interactive experience for users to buy and sell tickets. It
            also provides sellers with tools to monitor ticket sales
            effectively. The platform offers tickets for various events,
            including concerts, operas, theater performances, and more. This
            project is developed using Next.js with TypeScript , leveraging both
            Server-Side Rendering (SSR) and Static Site Generation (SSG)
            approaches. On the backend, it employs a PostgreSQL database with
            Prisma as the ORM, ensuring the application is efficient, scalable,
            and secure.
          </p>
          <div className="mt-auto">
            <Link
              href="https://tiko-miniproject.vercel.app/"
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
    </div>
  );
}
