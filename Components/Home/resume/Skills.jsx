import React from 'react';
import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaHtml5, FaJs, FaLaptopCode, FaMobileAlt, FaReact, FaServer, FaWordpress } from 'react-icons/fa';
import { TbBrandFirebase, TbBrandTypescript } from 'react-icons/tb';
import SectionTitlte from '../../Common/SectionTitlte';

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", borderColor: "border-orange-500" },
        { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500", borderColor: "border-blue-500" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500", borderColor: "border-purple-500" },
        { name: "Tailwind CSS", icon: <FaReact />, color: "text-teal-500", borderColor: "border-teal-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", borderColor: "border-yellow-500" },
        { name: "TypeScript", icon: <TbBrandTypescript />, color: "text-blue-600", borderColor: "border-blue-600" },
        { name: "Reactjs", icon: <FaReact />, color: "text-blue-600", borderColor: "border-blue-600" },
        { name: "Nodejs", icon: <FaLaptopCode />, color: "text-green-500", borderColor: "border-green-500" },
        { name: "Nextjs", icon: <FaReact />, color: "text-gray-800", borderColor: "border-gray-800" },
        { name: "Express", icon: <FaServer />, color: "text-gray-600", borderColor: "border-gray-600" },
        { name: "MongoDB", icon: <FaDatabase />, color: "text-green-700", borderColor: "border-green-700" },
        { name: "REST API", icon: <FaLaptopCode />, color: "text-blue-700", borderColor: "border-blue-700" },
        { name: "MySQL", icon: <FaDatabase />, color: "text-blue-700", borderColor: "border-blue-700" },
        { name: "React Native", icon: <FaMobileAlt />, color: "text-blue-400", borderColor: "border-blue-400" },
        { name: "WordPress", icon: <FaWordpress />, color: "text-blue-800", borderColor: "border-blue-800" },
        { name: "GitHub", icon: <FaGithub />, color: "text-black", borderColor: "border-black" },
        { name: "Firebase", icon: <TbBrandFirebase />, color: "text-yellow-500", borderColor: "border-yellow-500" }
    ];

    return (
        <div className="mb-12">
            <SectionTitlte title={'Working Skills'} />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-0">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 px-3 py-6 justify-center rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:rotate-1 flex items-center"
                        style={{ borderColor: skill.borderColor, borderWidth: "2px" }}
                    >
                        <div className={`text-4xl bg-opacity-10 rounded-full p-4 ${skill.color}`}>
                            {skill.icon}
                        </div>
                        <div className="ml-4">
                            <h3 className={`text-lg font-semibold ${skill.color}`}>
                                {skill.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
