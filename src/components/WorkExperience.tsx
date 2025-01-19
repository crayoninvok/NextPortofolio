
const companies = [
  {
    name: "Indonesia Aerospace(IAe)",
    image: "/PTDI.jpg", // Add your actual image path here
    role: "Intern Avionic, Electric & Instrumentation Engineer",
    description:
      "I worked on building scalable web applications, focusing on front-end development with React and TypeScript. Responsible for improving performance and implementing new features.",
  },
  {
    name: "PT. Sulendraputra Sukses",
    image: "/SS.jpg", // Add your actual image path here
    role: "Marine Radio S/E & VDR Engineer",
    description:
      "Worked on the user interface and user experience design, enhancing website performance and collaborating closely with backend teams.",
  },
];
import { Chakra_Petch } from "next/font/google";
const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function WorkExperience() {
  return (
    <div className="w-full md:w-full h-full">
      <h2
        className={`${chakrapetch.className} text-[35px] text-center font-bold text-white mb-6 mt-7`}
      >
        Work Experience
      </h2>
      <div className="relative w-full h-full flex justify-evenly space-x-8">
        {/* Loop over the companies to render the cards */}
        {companies.map((company, index) => (
          <div
            key={index}
            className="card-wrap w-[500px] h-[400px] relative transform-style-preserve-3d duration-500"
          >
            {/* Card Front (Company Name + Background Image) */}
            <div
              className="card-front absolute inset-0 bg-cover bg-center rounded-lg shadow-lg p-10 flex items-center justify-center backface-hidden"
              style={{
                backgroundImage: `url(${company.image})`, // Dynamic company image
              }}
            >
              <h3 className="text-2xl font-bold bg-black/60 backdrop-blur-xl rounded-lg text-black absolute bottom-0 right-0 p-2 mb-3 mr-3">
                {company.name}
              </h3>
            </div>

            {/* Card Back (Role & Description) */}
            <div className="card-back absolute inset-0 bg-gray-600 rounded-lg shadow-lg p-8 flex flex-col justify-between transform rotate-y-180 backface-hidden group-hover:rotate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white">{company.role}</h3>
              <p className="text-lg mt-4 text-white">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
