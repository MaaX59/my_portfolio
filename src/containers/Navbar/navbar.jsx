import React from "react";
import {FaConnectdevelop} from "react-icons/fa"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
    <div className="app__navbar-content">
      <div className="app__navbar-title">
        <FaConnectdevelop size={30}/>
        <h1>Max Strandberg</h1>
      </div>
      <div className="app__navbar-links">
      <ul>
        <li>
          <a href="#frontend">Frontend</a>
        </li>
        <li>
          <a href="#fullstack">Fullstack</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        
      </ul>
        
        
      </div>
      <div className="app__navbar-contact">
        <a href="#contact">Contact</a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
