import React from "react";
import "./components.css";

const Display = ({children}) => {
    return (
        <div>
            <div className="input">{children}</div>
        </div>
    );
};

export default Display;