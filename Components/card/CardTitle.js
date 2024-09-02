import React from "react";
import classNames from "classnames";

const CardTitle = ({ children, className }) => {
    return (
        <h2 className={classNames("text-lg font-bold text-gray-900 dark:text-white", className)}>
            {children}
        </h2>
    );
};

export default CardTitle;
