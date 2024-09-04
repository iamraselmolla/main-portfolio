import React from "react";
import Education from "./Education";
import ProfessionalCourses from "./ProfessionalCourses";
import Footer from "./Footer";
import Knowledge from "./Knowledge";
import Skills from "./Skills";
import Experineces from "./Experineces";

export default function Resume() {

  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div className="py-12 px-2 sm:px-5 md:px-10 w-full p-8">
        <Skills />
        <Experineces />
        <Knowledge />
        <Education />
        <ProfessionalCourses />
      </div>
      <Footer />
    </div>
  );
}
