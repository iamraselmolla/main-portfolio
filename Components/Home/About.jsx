import React from "react";
import { FaReact, FaWordpress, FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl my-9">
      <div className="w-full p-8 py-12">
        <div className="flex items-center">
          <h2 className="text-xl lg:text-4xl text-black dark:text-white">
            About Me
          </h2>
          <div className="border border-green-400 w-28 ml-14"></div>
        </div>
        <div>
          <p className="text-[15px] text-[#646464] dark:text-[#A6A6A6] py-5">
            I’m a dedicated Full Stack Developer with a passion for learning and growth. My experience spans from Web Development at Weblabx.com to completing over 130 projects as a freelancer on Fiverr.com. I recently expanded my skills during a Full Stack Developer internship at Arterns.in. <br />
            I’m self-motivated, hard-working, and committed to continuous improvement. I have a keen interest in software design, architecture, and all aspects of software engineering, always eager to tackle new challenges and contribute to innovative projects.
          </p>
        </div>
        <div className="flex items-center py-5">
          <h2 className="text-xl lg:text-4xl text-black dark:text-white">
            What I Do
          </h2>
          <div className="border border-green-400 w-28 ml-14"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** Front-end Development **/}
          <div className="border-2 bg-[#FCF4FF] dark:bg-[#111111] border-blue-600 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-blue-600 rounded-full p-4">
              <FaReact className="text-6xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              Front-end Development
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Creating interactive and visually appealing user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.
            </p>
          </div>
          {/** Full Stack Application Development **/}
          <div className="border-2 bg-[#FEFAF0] dark:bg-[#111111] border-green-700 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-green-700 rounded-full p-4">
              <FaDatabase className="text-6xl text-green-700" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              Full Stack Application Development
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Building robust and scalable web applications using a combination of front-end and back-end technologies.
            </p>
          </div>
          {/** Mobile App Development **/}
          <div className="border-2 bg-[#FFF4F4] dark:bg-[#111111] border-blue-400 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-blue-400 rounded-full p-4">
              <FaMobileAlt className="text-6xl text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              Mobile App Development
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Developing high-quality mobile applications using React Native to provide seamless user experiences.
            </p>
          </div>
          {/** WordPress Design **/}
          <div className="border-2 bg-[#FCF4FF] dark:bg-[#111111] border-blue-800 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-blue-800 rounded-full p-4">
              <FaWordpress className="text-6xl text-blue-800" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              WordPress Design
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Designing and developing WordPress sites with a focus on creating engaging and functional web experiences.
            </p>
          </div>
          {/** Backend Development **/}
          <div className="border-2 bg-[#FEFAF0] dark:bg-[#111111] border-gray-600 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-gray-600 rounded-full p-4">
              <FaServer className="text-6xl text-gray-600" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              Backend Development
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Designing and implementing server-side logic and APIs to support and enhance front-end functionality.
            </p>
          </div>
          {/** System Design & Architecture **/}
          <div className="border-2 bg-[#FFF4F4] dark:bg-[#111111] border-gray-600 rounded-lg shadow-lg flex flex-col items-center p-6 text-center">
            <div className="border-4 border-gray-600 rounded-full p-4">
              <MdOutlineArchitecture className="text-6xl text-gray-600" />
            </div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-4">
              System Design & Architecture
            </h2>
            <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
              Designing scalable and efficient system architectures to meet complex software requirements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
