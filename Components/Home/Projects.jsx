import React from "react";
import Image from "next/image";
import { LuExternalLink, LuGitHub } from "react-icons/lu";
import Link from "next/link";
import Footer from "./Footer";
import daeImage from "../../assets/Images/dae.png";

// Dummy data for demonstration. Replace with actual image paths and links.
const projectData = [
  {
    image: daeImage, // Ensure the path is correct
    title: "DAE Application",
    description: "Application for Department Of Agricultural Extension.",
    liveLink: "https://dae-app.vercel.app/",
    githubLink: "https://github.com/iamraselmolla",
    skills: ["React", "Next.js", "MongoDB", "Node.js"]
  },
  // Add more project objects here if needed
];

function Projects() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div className="py-12 px-4 sm:px-6 md:px-8 w-full">
        <div className="flex items-center pb-8">
          <h2 className="text-2xl lg:text-4xl text-black dark:text-white font-bold">
            Projects
          </h2>
          <div className="border border-green-400 w-32 ml-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
                <Image src={project.image} alt=""></Image>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0d9244] to-[#57e793]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  {/* {project.liveLink && (
                    <Link
                      href={project.liveLink} // Set the correct href here
                      className="text-green-500 flex items-center text-sm hover:text-green-600 transition-colors duration-300"
                    >
                      Live Preview
                      <LuExternalLink className="ml-2" />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink} // Set the correct href here
                      className="text-gray-700 dark:text-gray-300 flex items-center text-sm hover:text-gray-500 transition-colors duration-300"
                    >
                      GitHub
                      <LuGitHub className="ml-2" />
                    </Link>
                  )} */}
                </div>
                {project.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium py-1 px-2 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
