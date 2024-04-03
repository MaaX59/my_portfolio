import React from "react";
import "./tech.css";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import tailwind from "../../images/tailwind.png";
import express from "../../images/Expressjs.png";
import mysql from "../../images/mysql.png";
import mongodb from "../../images/mongodb.png";

const Tech = () => {
  return (
    <div className="app__tech" id="technologies">
      <div className="app__tech-content">
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
      </div>
    </div>
  );
};

export default Tech;
