import React from "react";
import { FaCertificate } from "react-icons/fa";

export default function ProfessionalCourses() {
    const courses = [
        {
            date: "July 2023 - ongoing",
            title: "Advanced Development Level 2",
            details: "Advanced Development with backend focused on JavaScript and Node.js",
            skills: ["TypeScript", "Mongoose", "NoSQL", "Redux", "Next.js", "Prisma", "AWS", "Redis", "PostgreSQL", "GraphQL", "Advanced MongoDB", "Testing"]
        },
        {
            date: "June 2022 - Dec 2022",
            title: "Programming Hero",
            details: "Complete Web Development Course With Jhankar Mahbub",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "GitHub", "Vercel", "Firebase"]
        },
        {
            date: "Sep 2020 - Jun 2021",
            title: "Udemy.com",
            details: "The Complete JavaScript Course: From Zero to Expert! by Jonas Schmedtmann",
            skills: ["JavaScript", "Asynchronous JavaScript", "JavaScript Fundamentals", "Advanced JavaScript"]
        },
        {
            date: "Nov 2016 - Apr 2017",
            title: "Computer Palace, Khalispur, Khulna",
            details: "Web Design and Development",
            skills: ["HTML", "CSS", "Basic JavaScript", "Web Design Principles", "Basic PHP", "WordPress Customization", "WordPress Development"]
        }
    ];

    return (
        <div>
            <div className="flex items-center pb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Professional Courses
                </h2>
                <div className="border border-blue-400 w-24 ml-4"></div>
            </div>
            <div className="space-y-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="relative bg-white dark:bg-gray-900 p-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl shadow-md transition-all duration-500">
                            <FaCertificate />
                        </div>
                        <div className="ml-10">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{course.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-3">{course.details}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{course.date}</p>
                            <div className="flex flex-wrap mt-4 gap-2">
                                {course.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-xs font-semibold transition-all duration-500 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
