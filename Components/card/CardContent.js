import React from "react";
import classNames from "classnames";

const CardContent = ({ children, className }) => {
    return (
        <div className={classNames("p-4", className)}>
            {children}
        </div>
    );
};

export default CardContent;
