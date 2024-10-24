import React from "react";
import "../../src/index.css";

function Logo() {
    return (
        <div className="logo-container">
            <span className="outer-circle">
                <span className="inner-circle"></span>
                <div className="text-container">
                    <div className="neighbors-word">Neighbors</div>
                    <div className="lawn-service-word">Lawn Service</div>
                </div>
            </span>
        </div>
    );
}

export default Logo;