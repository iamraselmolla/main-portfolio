import React from "react";
import Image from "next/image";
import { RiExternalLinkFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";

import Link from "next/link";
import Footer from "./Footer";
import daeImage from "../../assets/Images/dae.png";
import bengalShop from "../../assets/Images/bengal-shop.png";
import buyWatch from "../../assets/Images/buy-watch.png";
import assetListing from "../../assets/Images/asset.png";
import research from "../../assets/Images/research.png";

// Dummy data for demonstration. Replace with actual image paths and links.
const projectData = [
  {
    image: daeImage,
    title: "DAE Application",
    description: "An application for the Department of Agricultural Extension, designed to manage project activities, store moments, save notes, and maintain a comprehensive database of farmers' data, streamlining project management processes.",
    liveLink: "https://dae-app.vercel.app/",
    githubLink: "https://github.com/iamraselmolla/dae-project-activities-management",
    skills: ["React", "MongoDB", "Node.js", "Tailwind", "Cloudinary"]
  },
  {
    image: bengalShop,
    title: "Bengal Shop",
    description: "An online store offering fresh and organic foods, providing users with a convenient platform to shop for a wide variety of high-quality, locally sourced produce.",
    liveLink: "https://iamraselmolla-bengal-shop.web.app/",
    githubLink: "https://github.com/iamraselmolla/bengal-shop",
    skills: ["React"]
  },
  {
    image: buyWatch,
    title: "Buy and Sell Watch",
    description: "A dynamic marketplace for buying and selling watches, where users can participate in auctions and compete to offer the highest bids for luxury timepieces.",
    liveLink: "https://rasel-buy-watch.web.app/",
    githubLink: "https://github.com/iamraselmolla/hand-wtach-garaje-client-module",
    skills: ["React", "MongoDB", "Node.js", "Tailwind", "Cloudinary"]
  },
  {
    image: assetListing,
    title: "Asset Buy, Sell & Rent",
    description: "A platform for listing, buying, selling, and renting assets, offering users a seamless experience to manage their property transactions with ease.",
    liveLink: "https://assests-listing.netlify.app/",
    githubLink: "https://github.com/iamraselmolla/assests-listing-nextJs",
    skills: ["Next.js", "MongoDB", "Cloudinary"]
  },
  {
    image: research,
    title: "Research & Conferences",
    description: "A dedicated platform for submitting research, organizing conferences, and hosting events, tailored to meet the needs of academic and professional communities.",
    liveLink: "https://submitresearch.netlify.app/",
    githubLink: "https://github.com/iamraselmolla/research",
    skills: ["Next.js", "MongoDB", "Cloudinary"]
  }
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
