import React from "react";
import BackgroundAnimation from "../../components/backgroundAnimation";
import Cat from "../../images/cat2.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="app__about">
      <div className="app__about_content">
        <div className="app__about_content-animation">
          {/* <BackgroundAnimation /> */}
          <img src={Cat} alt="cat" />
        </div>
        <div className="app__about_content-info">
          <h1>About Me</h1>
          <p>
            I am a passionate Full-Stack Developer from Sweden and I am excited
            about creating eye-catching, yet minimalistic websites and
            applications. <br />
            My strengths lie in translating designs into fully responsive
            websites.{" "}
          </p>
          <p>
            I made my first websites as soon as I got the internet at the age of
            11, and have been interested in technology and its ability to shape
            the world around us ever since.
          </p>
          <p>
            In my free time, I enjoy hiking, traveling, and camping with my
            wife, which I feel complements my time in front of the computer very
            well.{" "}
          </p>
        </div>
      </div>
      <div className="app__about_bottom">
        <span>Have a look at my projects!</span>
      </div>
    </div>
  );
};

export default About;
