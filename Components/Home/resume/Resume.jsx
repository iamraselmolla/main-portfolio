import React from "react";
import Skills from "./Skills";
import Experineces from "./Experineces"; // Fixed typo
import Knowledge from "./Knowledge";
import Education from "./Education";
import ProfessionalCourses from "./ProfessionalCourses";
import Footer from "@/Components/Common/Footer";

export default function Resume() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div className="py-12 px-2 sm:px-5 md:px-10 w-full p-8">
        <div className="space-y-16"> {/* Add consistent spacing between sections */}
          <Skills />
          <Experineces /> {/* Fixed typo */}
          <Knowledge />
          <Education />
          <ProfessionalCourses />
        </div>
      </div>
      <Footer />
    </div>
  );
}
