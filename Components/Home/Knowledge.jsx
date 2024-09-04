import React from 'react';
import { FaDatabase, FaLaptopCode, FaMobileAlt, FaReact, FaWordpress } from 'react-icons/fa';
import { MdOutlineArchitecture } from 'react-icons/md';

const Knowledge = () => {
    const knowledgeItems = [
        { name: "Programming", icon: <FaLaptopCode />, color: "bg-blue-500" },
        { name: "WordPress Design", icon: <FaWordpress />, color: "bg-blue-800" },
        { name: "Mobile App Development", icon: <FaMobileAlt />, color: "bg-blue-400" },
        { name: "System Design & Architecture", icon: <MdOutlineArchitecture />, color: "bg-gray-600" },
        { name: "Database Management", icon: <FaDatabase />, color: "bg-green-700" },
        { name: "React Ecosystem", icon: <FaReact />, color: "bg-blue-600" },
    ];
    return (
        <div className="mb-12">
            <div className="flex items-center pb-8">
                <h2 className="text-xl lg:text-4xl text-black dark:text-white">
                    Knowledge
                </h2>
                <div className="border border-green-400 w-28 ml-14"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {knowledgeItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 py-6 rounded-lg shadow-lg px-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${item.color} text-white text-2xl mb-3`}>
                            {item.icon}
                        </div>
                        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                            {item.name}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Knowledge;