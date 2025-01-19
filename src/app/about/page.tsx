"use client";
import AboutHeader from "@/components/AboutHeader";
import AboutContent from "@/components/AboutContent";
import Timeline from "@/components/Timeline";
import TechnologiesMarquee from "@/components/SkillsMarque";
import WorkExperienceCard from "@/components/WorkExperience";
import CertificationCard from "@/components/CertificationCard"; // Import CertificationCard
import { Chakra_Petch } from "next/font/google";
import MyProject from "@/components/MyProject";
const chakrapetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white min-h-screen flex flex-col justify-center items-center p-6">
      <AboutHeader />
      <AboutContent />
      <Timeline />
      <WorkExperienceCard />
      {/* Certification Section */}
      <div className="w-full mt-12">
        <h2
          className={`${chakrapetch.className} text-[35px] text-center font-bold text-white mb-6`}
        >
          My Certifications
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <CertificationCard
            title="Process Measurement Instrumentation endorsed by Yokogawa Indonesia"
            previewImageUrl="/yokogawa.jpg" // Replace with the preview image path
            certificateImageUrl="/yokogawacert.jpg" // Replace with the actual certificate image path
          />
          <CertificationCard
            title="Marine Radio Operator GOC endorsed by Directorate General of Resources and Equipment for Post and Information Technology."
            previewImageUrl="/kominfo.jpg" // Replace with the preview image path
            certificateImageUrl="/reor.jpg" // Replace with the actual certificate image path
          />
          <CertificationCard
            title="Voyage Data Recorder Engineer endorsed by Furuno Singapore."
            previewImageUrl="/fsg.jpg"
            certificateImageUrl="/fsgcert.jpg"
          />
          <CertificationCard
            title="Full-Stack Web Development endorsed by Purwadhika Digital Technology School."
            previewImageUrl="/pwdk.jpg"
            certificateImageUrl="/"
          />
        </div>
      </div>
      <MyProject />
      <TechnologiesMarquee />
    </div>
  );
}
