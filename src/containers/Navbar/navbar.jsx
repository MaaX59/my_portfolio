import React from "react";
import {FaConnectdevelop} from "react-icons/fa"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-title">
        <FaConnectdevelop size={30}/>
        <h1>Max Strandberg</h1>
      </div>
      <div className="app__navbar-links">
        <h1>Frontend</h1>
        <h1>Fullstack</h1>
        <h1>Technologies</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
