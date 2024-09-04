import Link from "next/link";
import React from "react";
import {
  FaBootstrap, FaBriefcase, FaCalendarAlt, FaCss3, FaDatabase,
  FaHtml5, FaJs, FaLaptopCode, FaLink, FaMobileAlt, FaReact,
  FaServer, FaWordpress
} from "react-icons/fa";
import Education from "./Education";
import ProfessionalCourses from "./ProfessionalCourses";
import Footer from "./Footer";
import Knowledge from "./Knowledge";
import Skills from "./Skills";

export default function Resume() {




  const experiences = [
    {
      date: "January 2018 - March 2019",
      title: "Web Developer (WordPress)",
      company: "Weblabx.com, Khulna",
      link: "http://weblabx.com/",
      details: "Worked on various WordPress projects and customized themes.",
    },
    {
      date: "September 2019 - June 2022",
      title: "Web Designer and Developer",
      company: "Fiverr.com",
      link: "http://fiverr.com/",
      details: "Completed 130 projects, including web design and development tasks.",
    },
    {
      date: "July 2023 - September 2023",
      title: "Full Stack Developer Intern",
      company: "Arterns.in, Uttarakhand, India",
      link: "http://arterns.in/",
      details: "Contributed to multiple projects involving front-end and back-end development.",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div className="py-12 px-2 sm:px-5 md:px-10 w-full p-8">
        {/* Working Skills Section */}
        <Skills />

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center pb-8">
            <h2 className="text-xl lg:text-4xl text-black dark:text-white">Experience</h2>
            <div className="border border-green-400 w-28 ml-14"></div>
          </div>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    <FaBriefcase />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="mr-2" />
                        <span>{experience.date}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-lg text-gray-800 dark:text-gray-300">{experience.company}</p>
                    {experience.details && (
                      <p className="mt-2 text-gray-700 dark:text-gray-400">{experience.details}</p>
                    )}
                    <a href={experience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-green-500 hover:text-green-600 transition-colors duration-200">
                      <FaLink className="mr-1" />
                      <span>Company Website</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Knowledge />


        <Education />
        <ProfessionalCourses />
      </div>
      <Footer />
    </div>
  );
}
