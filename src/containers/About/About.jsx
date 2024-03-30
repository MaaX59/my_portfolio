import React from "react";
import BackgroundAnimation from "../../components/backgroundAnimation";
import Cat from "../../images/cat3.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="app__about">
      <div className="app__about_content">
        <div className="app__about_content-animation">
          <BackgroundAnimation />
          <img src={Cat} alt="cat" />
        </div>
        <div className="app__about_content-info">
          <h3>adkhabwdkabdwkadbw</h3>
        </div>
      </div>
      <div className="app__about_bottom">
        <span>Scroll down to see my projects</span>
      </div>
    </div>
  );
};

export default About;
