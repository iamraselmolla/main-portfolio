import React from "react";
import { FaReact, FaWordpress, FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import Footer from "./Footer";

const aboutItems = [
  {
    icon: <FaReact className="text-6xl text-blue-600" />,
    title: "Front-end Development",
    description: "Creating interactive and visually appealing user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.",
    bgColor: "#FCF4FF",
    borderColor: "border-blue-600",
  },
  {
    icon: <FaDatabase className="text-6xl text-green-700" />,
    title: "Full Stack Application Development",
    description: "Building robust and scalable web applications using a combination of front-end and back-end technologies.",
    bgColor: "#FEFAF0",
    borderColor: "border-green-700",
  },
  {
    icon: <FaMobileAlt className="text-6xl text-blue-400" />,
    title: "Mobile App Development",
    description: "Developing high-quality mobile applications using React Native to provide seamless user experiences.",
    bgColor: "#FFF4F4",
    borderColor: "border-blue-400",
  },
  {
    icon: <FaWordpress className="text-6xl text-blue-800" />,
    title: "WordPress Design",
    description: "Designing and developing WordPress sites with a focus on creating engaging and functional web experiences.",
    bgColor: "#FCF4FF",
    borderColor: "border-blue-800",
  },
  {
    icon: <FaServer className="text-6xl text-gray-600" />,
    title: "Backend Development",
    description: "Designing and implementing server-side logic and APIs to support and enhance front-end functionality.",
    bgColor: "#FEFAF0",
    borderColor: "border-gray-600",
  },
  {
    icon: <MdOutlineArchitecture className="text-6xl text-gray-600" />,
    title: "System Design & Architecture",
    description: "Designing scalable and efficient system architectures to meet complex software requirements.",
    bgColor: "#FFF4F4",
    borderColor: "border-gray-600",
  },
];

const About = () => {
  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl my-6 px-6 md:px-8 py-12">
      <div className="w-full">
        <div className="flex items-center">
          <h2 className="text-lg lg:text-3xl text-black dark:text-white">
            About Me
          </h2>
          <div className="border border-green-400 w-24 lg:w-28 ml-10"></div>
        </div>
        <div>
          <p className="text-sm lg:text-base text-[#646464] dark:text-[#A6A6A6] py-4">
            I’m a dedicated Full Stack Developer with a passion for learning and growth. My experience spans from Web Development at Weblabx.com to completing over 130 projects as a freelancer on Fiverr.com. I recently expanded my skills during a Full Stack Developer internship at Arterns.in. <br />
            I’m self-motivated, hard-working, and committed to continuous improvement. I have a keen interest in software design, architecture, and all aspects of software engineering, always eager to tackle new challenges and contribute to innovative projects.
          </p>
        </div>
        <div className="flex items-center py-4">
          <h2 className="text-lg lg:text-3xl text-black dark:text-white">
            What I Do
          </h2>
          <div className="border border-green-400 w-24 lg:w-28 ml-10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`border-2 ${item.bgColor} dark:bg-[#111111] ${item.borderColor} rounded-lg shadow-lg flex flex-col items-center p-6 text-center`}
            >
              <div className={`border-4 ${item.borderColor} rounded-full p-4`}>
                {item.icon}
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-black dark:text-white mt-4">
                {item.title}
              </h2>
              <p className="text-base text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
