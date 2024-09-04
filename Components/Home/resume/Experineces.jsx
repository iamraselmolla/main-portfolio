import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaLink } from 'react-icons/fa';
import SectionTitlte from '../../Common/SectionTitlte';

const Experineces = () => {
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
        <div className="mb-12">
            <SectionTitlte title={"Experiences"} />
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="relative bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:rotate-12">
                                <FaBriefcase />
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
                                <a
                                    href={experience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-2 text-green-500 hover:text-green-600 transition-colors duration-200"
                                >
                                    <FaLink className="mr-1" />
                                    <span>Company Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experineces;
