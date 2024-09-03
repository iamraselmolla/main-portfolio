import React from "react";
import Image from "next/image";
import { RiExternalLinkFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";

import Link from "next/link";
import Footer from "./Footer";
import daeImage from "../../assets/Images/dae.png";
import bengalShop from "../../assets/Images/bengal-shop.png";
import buyWatch from "../../assets/Images/buy-watch.png";

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
  {
    image: bengalShop, // Ensure the path is correct
    title: "Bengal Shop",
    description: "Application for Fresh and Organic Food.",
    liveLink: "https://iamraselmolla-bengal-shop.web.app/",
    githubLink: "https://github.com/iamraselmolla/bengal-shop",
    skills: ["React", "Next.js", "MongoDB", "Node.js"]
  },
  {
    image: buyWatch, // Ensure the path is correct
    title: "Buy and Sell Watch",
    description: "A store where user can buy and sell watches. take part in auction and be the highest rate giver",
    liveLink: "https://rasel-buy-watch.web.app/",
    githubLink: "https://github.com/iamraselmolla/hand-wtach-garaje-client-module",
    skills: ["React", "Next.js", "MongoDB", "Node.js"]
  },
  // Add more project objects here if needed
];

const Projects = () => {
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
                <Image src={project?.image} alt=""></Image>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0d9244] to-[#57e793]">
                  {project?.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {project?.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  {project?.liveLink && (
                    <Link
                      target="_blank"
                      href={project?.liveLink} // Set the correct href here
                      className="text-green-500 flex items-center text-sm hover:text-green-600 transition-colors duration-300"
                    >
                      Live Preview
                      <RiExternalLinkFill className="ml-2" />
                    </Link>
                  )}
                  {project?.githubLink && (
                    <Link
                      target="_blank"
                      href={project?.githubLink} // Set the correct href here
                      className="text-gray-700 dark:text-gray-300 flex items-center text-sm hover:text-gray-500 transition-colors duration-300"
                    >
                      GitHub
                      <RxGithubLogo className="ml-2" />
                    </Link>
                  )}

                </div>
                {project?.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project?.skills.map((skill, idx) => (
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
