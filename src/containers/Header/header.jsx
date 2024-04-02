import React from "react";
import "./header.css";
// import BackgroundAnimation from '../../components/backgroundAnimation';
// import headshot from '../../images/cat3.png'
import headshot from "../../images/round-headshot.png";
import bg from "../../images/bg6.png";

const Header = () => {
  return (
    <div className="app__header">
      {/* <img src={bg} alt="background" /> */}
      <div className="app__header-intro">
        <div className="app__header-intro-first">
          <h1>
            Hello there! I´m&nbsp;<span style={{ color: "red" }}>Max</span>
          </h1>
          <h2>I´m a Fullstack Web Developer from Sweden</h2>
          <div className="app__header-intro-first-buttons">
            <a href="#about" className="app__header_button">
              About
            </a>
            <a href="#frontend" className="app__header_button2">
              Projects
            </a>
          </div>
        </div>
        <div className="app__header-intro-second">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
    </div>
  );
};

export default Header;
