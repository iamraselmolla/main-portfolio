import React from "react";
import classNames from "classnames";

const CardFooter = ({ children, className }) => {
    return (
        <div className={classNames("p-4 border-t border-gray-200 dark:border-gray-700", className)}>
            {children}
        </div>
    );
};

export default CardFooter;
