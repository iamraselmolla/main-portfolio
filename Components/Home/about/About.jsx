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

        <p className="text-sm lg:text-base text-[#646464] dark:text-[#A6A6A6]">

         I’m a passionate and dedicated Full Stack Developer currently working as a Software Engineer at Genzam.it. With a strong commitment to learning and growth, I bring experience from diverse roles, including Web Development at Weblabx.com and completing over 130 successful projects as a top-rated freelancer on Fiverr.com.

My journey also includes a transformative Full Stack Developer internship at Arterns.in, where I honed my skills in software design, architecture, and engineering. Self-motivated and hard-working, I thrive on tackling complex challenges and contributing to innovative projects. I’m always eager to expand my expertise and drive impactful solutions in the ever-evolving tech landscape.</p>

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
