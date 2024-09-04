import React from 'react';
import { FaBook } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      date: "Jan 2014 - Feb 2016",
      title: "Marine Diesel Engine Artificer",
      institution: "Bangladesh Institute of Marine Technology",
      description: "Specialized training in marine diesel engine maintenance and operation."
    },
    {
      date: "Jan 2008 - Mar 2013",
      title: "Secondary School Certificate (S.S.C)",
      institution: "Adaghat High School",
      description: "Secondary School Certificate, providing a strong foundation in general education."
    }
  ];

  return (
    <section className="w-full dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Education</h2>
          <div className="border-b-4 border-green-500 w-16 ml-6"></div>
        </header>
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 shadow-lg rounded-lg border-l-4 border-green-500 transform transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-green-600"
            >
              <div className="flex items-start mb-6 space-x-4">
                <div className="w-14 h-14 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center text-white text-3xl">
                  <FaBook />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{education.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{education.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{education.date}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
