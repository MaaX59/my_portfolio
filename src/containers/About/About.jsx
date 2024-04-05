import React from "react";
import AboutMe from "../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="app__about">
      <div className="app__about_content">
        <div className="app__about_content-animation">
          {/* <BackgroundAnimation /> */}
          <img src={AboutMe} alt="cat" />
        </div>
        <div className="app__about_content-info">
          <h1 className="title">About Me</h1>
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

      {/* <div className="app__about-techstack">
        <div>
          {" "}
          <span className="title">My Skill Set</span>
        </div>
        <ul>
          <li>
            {" "}
            <img src={html} alt="html logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={css} alt="css logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={js} alt="js logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={react} alt="react logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={node} alt="node logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={express} alt="express logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={tailwind} alt="tailwind logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={mongodb} alt="mongodb logo" />{" "}
          </li>
          <li>
            {" "}
            <img src={mysql} alt="mysql logo" />{" "}
          </li>
        </ul>
      </div> */}
      {/* <div className="app__about_bottom">
        <span>Have a look at my projects!</span>
      </div> */}
    </div>
  );
};

export default About;
