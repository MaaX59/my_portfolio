import React from "react";
import "./header.css";

import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import node from "../../images/node2.png";
import tailwind from "../../images/tailwind.png";
import express from "../../images/Expressjs.png";
import mysql from "../../images/mysql.png";
import mongodb from "../../images/mongodb.png";
import headshot from "../../images/round-headshot2.png";
import wordpress from "../../images/wordpress.png";
import bg from "../../images/waves2.jpg";

const Header = () => {
  return (
    <div className="app__header">
      <img src={bg} alt="background" />
      <div className="app__header-intro">
        <div className="app__header-intro-first">
          <h1>
            Hello there! I´m&nbsp;
            <span style={{ color: "#042ac2" }}>Max</span>
          </h1>
          <h2>I´m a Fullstack Web Developer from Sweden</h2>
          <div className="app__header-intro-first-buttons">
            <a href="#about" className="app__header_button">
              About me
            </a>
            <a href="#frontend" className="app__header_button2">
              My Work
            </a>
          </div>
        </div>
        <div className="app__header-intro-second">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
      <div className="app__header-techstack">
        <div className="app__header-techstack-title">
          {" "}
          <span>My Skill Set:</span>
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
          <li>
            {" "}
            <img src={wordpress} alt="wordpress logo" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
