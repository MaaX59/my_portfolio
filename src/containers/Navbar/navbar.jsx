import {React, useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaConnectdevelop, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-content">
        <div className="app__navbar-title">
          <FaConnectdevelop size={30} />
          <h1>portfolio</h1>
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
          <a href="https://github.com/MaaX59">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            <FaLinkedinIn />
          </a>
        </div><div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="app__navbar-smallscreen-menu"
        
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <SlClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
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
          )}
          </div>
      </div>
      
          </div>
          
    
  );
};

export default Navbar;
