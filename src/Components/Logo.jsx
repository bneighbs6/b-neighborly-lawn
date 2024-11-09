import React from "react";
import "../../src/index.css";
import LogoImage from "../newLogo.png";

function Logo() {
    return (
      // Add "../../Logo.png" here
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" className="logo" />
      </div>
    );
}

export default Logo;