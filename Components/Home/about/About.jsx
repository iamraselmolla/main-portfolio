import React from "react";
import { FaReact, FaWordpress, FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import { FaUserTie, FaBriefcase, FaMedal, FaCode } from "react-icons/fa";
import Footer from "@/Components/Common/Footer";
import SectionTitle from "@/Components/Common/SectionTitlte"; // Note the typo in the original import

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
  const professionalHighlights = [
    {
      icon: <FaBriefcase className="text-2xl text-blue-500" />,
      title: "Software Engineer",
      company: "Genzam.it",
      status: "Current Position"
    },
    {
      icon: <FaCode className="text-2xl text-indigo-500" />,
      title: "Web Developer",
      company: "Weblabx.com",
      status: "Previous Role"
    },
    {
      icon: <FaMedal className="text-2xl text-yellow-500" />,
      title: "Top-Rated Freelancer",
      company: "Fiverr.com",
      status: "130+ Successful Projects"
    },
    {
      icon: <FaBriefcase className="text-2xl text-green-500" />,
      title: "Full Stack Developer Intern",
      company: "Arterns.in",
      status: "Formative Experience"
    }
  ];

  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl space-y-16 my-6 px-6 md:px-8 py-12">
      {/* Redesigned About Me Section */}
      <div className="space-y-8">
        <SectionTitle title={"About Me"} />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Main Bio */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Full Stack Developer & Software Engineer</h3>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate and dedicated Full Stack Developer currently working as a Software Engineer at <span className="font-semibold text-blue-600 dark:text-blue-400">Genzam.it</span>. With a strong commitment to learning and growth, I bring experience from diverse roles across the development spectrum.
              </p>
              
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                Self-motivated and hard-working, I thrive on tackling complex challenges and contributing to innovative projects. I'm always eager to expand my expertise and drive impactful solutions in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
          
          {/* Right Column - Career Highlights */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <FaUserTie className="mr-2 text-blue-500" /> Professional Journey
            </h3>
            
            <div className="space-y-4">
              {professionalHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">{highlight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.company}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{highlight.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* What I Do Section - Kept similar structure but with enhanced styling */}
      <div className="space-y-8">
        <SectionTitle title={"What I Do!"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#222] shadow-lg hover:shadow-xl duration-300 rounded-lg p-6 transition-all transform hover:-translate-y-1 flex items-start"
            >
              <div className="flex-shrink-0 mr-4 transition-transform transform hover:scale-110">
                {item.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
