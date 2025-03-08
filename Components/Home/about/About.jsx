import React from "react";
import { FaReact, FaWordpress, FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import Footer from "@/Components/Common/Footer";
import SectionTitlte from "@/Components/Common/SectionTitlte";
const aboutItems = [
  {
    icon: <FaReact className="text-6xl text-blue-600" />,
    title: "Front-end Development",
    description: "Creating interactive and visually appealing user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaDatabase className="text-6xl text-green-700" />,
    title: "Full Stack Application Development",
    description: "Building robust and scalable web applications using a combination of front-end and back-end technologies.",
  },
  {
    icon: <FaMobileAlt className="text-6xl text-blue-400" />,
    title: "Mobile App Development",
    description: "Developing high-quality mobile applications using React Native to provide seamless user experiences.",
  },
  {
    icon: <FaWordpress className="text-6xl text-blue-800" />,
    title: "WordPress Design",
    description: "Designing and developing WordPress sites with a focus on creating engaging and functional web experiences.",
  },
  {
    icon: <FaServer className="text-6xl text-gray-600" />,
    title: "Backend Development",
    description: "Designing and implementing server-side logic and APIs to support and enhance front-end functionality.",
  },
  {
    icon: <MdOutlineArchitecture className="text-6xl text-gray-600" />,
    title: "System Design & Architecture",
    description: "Designing scalable and efficient system architectures to meet complex software requirements.",
  },
];
const About = () => {
  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl space-y-16 my-6 px-6 md:px-8 py-12">
      <div>
        <SectionTitlte title={"About Me"} />
        
        {/* Redesigned About Me section with decorative elements */}
        <div className="relative mt-8 pt-6 pb-4">
          {/* Decorative quote marks and highlights */}
          <div className="absolute top-0 left-0 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif">❝</div>
          <div className="absolute bottom-0 right-0 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif">❞</div>
          
          {/* Background accent element */}
          <div className="absolute top-12 -left-4 w-1 h-3/4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-lg"></div>
          
          <div className="space-y-6 pl-4 text-sm lg:text-base text-[#646464] dark:text-[#A6A6A6]">
            {/* Professional title with styled background */}
            <div className="relative inline-block mb-6">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white relative z-10 px-4 py-2">
                Software Engineer & Full Stack Developer
              </h3>
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 -skew-x-6 rounded"></div>
            </div>
            
            {/* First paragraph with visual accent */}
            <p className="relative pl-6 border-l-4 border-blue-500/30 dark:border-blue-400/30">
              With a passion for creating elegant solutions to complex problems, I bring a versatile skill set across the entire development stack. Currently serving as a Software Engineer at 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Genzam.it</span>, I combine technical expertise with a creative approach to deliver exceptional digital experiences.
            </p>
            
            {/* Second paragraph with different style */}
            <p className="relative backdrop-blur-sm backdrop-brightness-105 dark:backdrop-brightness-95 p-4 rounded-r-lg">
              My professional journey includes valuable experience as a Web Developer at 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Weblabx.com</span>, where I sharpened my front-end capabilities. As a top-rated freelancer on 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Fiverr.com</span>, I've successfully completed over 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> 130 projects</span>, developing a reputation for reliability and quality craftsmanship.
            </p>
            
            {/* Third paragraph with subtle highlight */}
            <p className="relative">
              My foundation was strengthened through a formative Full Stack Developer internship at 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Arterns.in</span>, where I gained crucial insights into software design principles, architecture patterns, and engineering best practices.
            </p>
            
            {/* Fourth paragraph with visual distinction */}
            <div className="relative p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border-t border-r border-gray-100 dark:border-gray-700 shadow-sm">
              <p>
                What sets me apart is my commitment to continuous learning and adaptability in the rapidly evolving tech landscape. I approach each project with enthusiasm, determination, and a focus on delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <SectionTitlte title={"What I Do!"} />
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"
              } bg-white dark:bg-[#222] shadow-2xl duration-500 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-3xl`}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 transition-transform transform hover:scale-110">
              {item.icon}
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">
                {item.title}
              </h2>
              <p className="text-base text-[#7B7B7B] dark:text-[#A6A6A6] mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default About;
