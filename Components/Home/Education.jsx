import React from 'react';
import { FaBook } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      date: "June 2022 - Dec 2022",
      title: "Complete Web Development Course",
      institution: "Programming Hero",
      description: "Comprehensive web development course covering front-end and back-end technologies."
    },
    {
      date: "Sep 2020 - Jun 2021",
      title: "The Complete JavaScript Course: From Zero to Expert!",
      institution: "Udemy.com",
      description: "In-depth JavaScript course covering advanced concepts and modern practices."
    },
    {
      date: "Nov 2016 - Apr 2017",
      title: "Web Design and Development",
      institution: "Computer Palace, Khalispur, Khulna",
      description: "Foundational course in web design and development principles."
    },
    {
      date: "Jan 2014 - Feb 2016",
      title: "Marine Diesel Engine Artificer",
      institution: "Bangladesh Institute of Marine Technology",
      description: "Specialized training in marine diesel engine maintenance and operation."
    },
    {
      date: "Jan 2008 - Mar 2013",
      title: "S.S.C",
      institution: "Adaghat High School",
      description: "Secondary School Certificate, providing a strong foundation in general education."
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 px-4 md:px-10 w-full mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center pb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="border-b-4 border-green-400 w-32 ml-4"></div>
        </div>
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg border-l-4 border-green-500 transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center text-white text-3xl mr-4">
                  <FaBook />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{education.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{education.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{education.date}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
