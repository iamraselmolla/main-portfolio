import Link from "next/link";
import React from "react";
import { FaBootstrap, FaCalendarAlt, FaCss3, FaDatabase, FaHtml5, FaJs, FaLaptopCode, FaLink, FaMobileAlt, FaReact, FaServer, FaWordpress } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import Education from "./Education";
import ProfessionalCourses from "./ProfessionalCourses";
import Footer from "./Footer";

export default function Resume() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", borderColor: "border-orange-500" },
    { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500", borderColor: "border-blue-500" },
    { name: "JavaScript (ES6)", icon: <FaJs />, color: "text-yellow-500", borderColor: "border-yellow-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500", borderColor: "border-purple-500" },
    { name: "Reactjs", icon: <FaReact />, color: "text-blue-600", borderColor: "border-blue-600" },
    { name: "Nextjs", icon: <FaReact />, color: "text-gray-800", borderColor: "border-gray-800" },
    { name: "Tailwind CSS", icon: <FaReact />, color: "text-teal-500", borderColor: "border-teal-500" },
    { name: "Nodejs", icon: <FaLaptopCode />, color: "text-green-500", borderColor: "border-green-500" },
    { name: "Express", icon: <FaServer />, color: "text-gray-600", borderColor: "border-gray-600" },
    { name: "MongoDB", icon: <FaDatabase />, color: "text-green-700", borderColor: "border-green-700" },
    { name: "MySQL", icon: <FaDatabase />, color: "text-blue-700", borderColor: "border-blue-700" },
    { name: "REST API", icon: <FaLaptopCode />, color: "text-blue-700", borderColor: "border-blue-700" },
    { name: "React Native", icon: <FaMobileAlt />, color: "text-blue-400", borderColor: "border-blue-400" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-blue-800", borderColor: "border-blue-800" },
  ];

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
        <div className="mb-12">
          <div className="flex items-center pb-8">
            <h2 className="text-xl lg:text-4xl text-black dark:text-white">
              Working Skills
            </h2>
            <div className="border border-green-400 w-28 ml-14"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-0">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-5 p-3 border-2 rounded-lg" style={{ borderColor: skill.borderColor }}>
                <div className={`text-3xl mr-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`font-semibold ${skill.color}`}>
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center pb-8">
            <h2 className="text-xl lg:text-4xl text-black dark:text-white">Experience</h2>
            <div className="border border-green-400 w-28 ml-14"></div>
          </div>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
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
                    <Link href={experience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-green-500 hover:text-green-600 transition-colors duration-200">
                      <FaLink className="mr-1" />
                      <span>Company Website</span>
                    </Link>
                  </div>
                </div>
              </div>


            ))}
          </div>
        </div>

        {/* Knowledge Section */}
        <div className="mb-12">
          <div className="flex items-center pb-8">
            <h2 className="text-xl lg:text-4xl text-black dark:text-white">
              Knowledge
            </h2>
            <div className="border border-green-400 w-28 ml-14"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[#505050] dark:text-[#d8d8d8]">
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <FaLaptopCode className="text-2xl mr-2 text-blue-600" />
              <h4 className="text-lg">Programming</h4>
            </div>
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <FaWordpress className="text-2xl mr-2 text-blue-800" />
              <h4 className="text-lg">WordPress Design</h4>
            </div>
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <FaMobileAlt className="text-2xl mr-2 text-blue-400" />
              <h4 className="text-lg">Mobile App Development</h4>
            </div>
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <MdOutlineArchitecture className="text-2xl mr-2 text-gray-600" />
              <h4 className="text-lg">System Design & Architecture</h4>
            </div>
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <FaDatabase className="text-2xl mr-2 text-green-700" />
              <h4 className="text-lg">Database Management</h4>
            </div>
            <div className="bg-[#EDF2F2] dark:bg-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center py-6">
              <FaReact className="text-2xl mr-2 text-blue-600" />
              <h4 className="text-lg">React Ecosystem</h4>
            </div>
          </div>
        </div>
        <Education />
        <ProfessionalCourses />
      </div>
      <Footer />
    </div>
  );
}
