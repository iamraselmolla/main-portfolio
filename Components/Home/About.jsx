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
            A self-motivated, creative, and hardworking individual with a strong ability to solve problems efficiently. I excel in communication and teamwork, consistently delivering high-quality work within deadlines. I am seeking a position as a Front-end Developer (Reactjs) to leverage my skills in a dynamic company.
          </p>
        </div>
        <div className="flex items-center py-5">
          <h2 className="text-xl lg:text-4xl text-black dark:text-white">
            What I Do
          </h2>
          <div className="border border-green-400 w-28 ml-14"></div>
        </div>
        <div className="space-y-6">
          {/** Front-end Development **/}
          <div className="border-2 bg-[#FCF4FF] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <FaReact className="text-7xl md:text-6xl text-blue-600" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Front-end Development
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Creating interactive and visually appealing user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.
              </p>
            </div>
          </div>
          {/** MERN Stack Development **/}
          <div className="border-2 bg-[#FEFAF0] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <FaDatabase className="text-7xl md:text-6xl text-green-700" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                MERN Stack Development
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Building robust and scalable web applications with MongoDB, Express.js, React, and Node.js.
              </p>
            </div>
          </div>
          {/** Mobile App Development **/}
          <div className="border-2 bg-[#FFF4F4] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <FaMobileAlt className="text-7xl md:text-6xl text-blue-400" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Mobile App Development
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Developing high-quality mobile applications using React Native to provide seamless user experiences.
              </p>
            </div>
          </div>
          {/** WordPress Design **/}
          <div className="border-2 bg-[#FCF4FF] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <FaWordpress className="text-7xl md:text-6xl text-blue-800" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                WordPress Design
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Designing and developing WordPress sites with a focus on creating engaging and functional web experiences.
              </p>
            </div>
          </div>
          {/** Software Management **/}
          <div className="border-2 bg-[#FEFAF0] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <FaServer className="text-7xl md:text-6xl text-gray-600" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Software Management
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Overseeing and coordinating software projects to ensure they meet organizational goals and deadlines.
              </p>
            </div>
          </div>
          {/** System Design & Architecture **/}
          <div className="border-2 bg-[#FFF4F4] dark:bg-[#111111] gap-6 dark:border-2 dark:border-[#292929] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
            <MdOutlineArchitecture className="text-7xl md:text-6xl text-gray-600" />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                System Design & Architecture
              </h2>
              <p className="text-lg text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                Designing scalable and efficient system architectures to meet complex software requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;