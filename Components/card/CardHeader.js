import React from "react";
import classNames from "classnames";

const CardHeader = ({ children, className }) => {
    return (
        <div className={classNames("p-4 border-b border-gray-200 dark:border-gray-700", className)}>
            {children}
        </div>
    );
};

export default CardHeader;
