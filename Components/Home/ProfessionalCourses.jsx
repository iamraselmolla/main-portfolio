import React from "react";
import { FaCertificate } from "react-icons/fa";

export default function ProfessionalCourses() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-12 px-4 md:px-10 w-full">
            <div className="flex items-center pb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Professional Courses
                </h2>
                <div className="border border-blue-400 w-24 ml-4"></div>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 top-0 w-1 bg-blue-300 dark:bg-blue-600 transform -translate-x-1/2 h-full"></div>
                <div className="space-y-8">
                    {[{
                        date: "June 2022 - Dec 2022",
                        title: "Programming Hero",
                        details: "Complete Web Development Course With Jhankar Mahbub",
                        skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React", "Node.js", "Express", "MongoDB"]
                    }, {
                        date: "Sep 2020 - Jun 2021",
                        title: "Udemy.com",
                        details: "The Complete JavaScript Course: From Zero to Expert! by Jonas Schmedtmann",
                        skills: ["JavaScript (ES6)", "Asynchronous JavaScript", "JavaScript Fundamentals", "Advanced JavaScript"]
                    }, {
                        date: "Nov 2016 - Apr 2017",
                        title: "Computer Palace, Khalispur, Khulna",
                        details: "Web Design and Development",
                        skills: ["HTML", "CSS", "Responsive Design", "Basic JavaScript", "Web Design Principles"]
                    }].map((course, index) => (
                        <div key={index} className="relative flex items-start bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-2xl">
                                <FaCertificate />
                            </div>
                            <div className="ml-16 w-full">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{course.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{course.details}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{course.date}</p>
                                <div className="flex flex-wrap mt-4 gap-2">
                                    {course.skills.map((skill, i) => (
                                        <span key={i} className="bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-xs font-semibold mb-2">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
