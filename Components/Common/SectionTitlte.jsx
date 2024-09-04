import React from 'react';

const SectionTitlte = ({ title }) => {
    return (
        <div className="flex items-center">
            <h2 className="text-lg lg:text-3xl text-black dark:text-white">
                {title}
            </h2>
            <div className="border border-green-400 w-24 lg:w-28 ml-10"></div>
        </div>
    );
};

export default SectionTitlte;