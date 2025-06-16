import React from "react";
import NavigationBar from "./NavigationBar";
import Logo from "./Logo";

function Header() { 
    return (
      <header className="header text-center">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-bar">
          <NavigationBar />
        </div>
      </header>
    );
}

export default Header; 