import React from "react";
import classNames from "classnames";

const Card = ({ children, className }) => {
    return (
        <div className={classNames("bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden", className)}>
            {children}
        </div>
    );
};

export default Card;
