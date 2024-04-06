import React from "react";
import "./fullstack.css";
import data from "../../data/fullstack";
import ProjectCard from "../../components/projectCard";

const Fullstack = () => {
  return (
    <div className="app__fullstack" id="fullstack">
      <div className="app__fullstack-title">
        <h1>Fullstack</h1>
        <h3>
          {" "}
          Here are some fullstack projects I´ve created - including backend
          server and login{" "}
        </h3>
      </div>
      <div className="app__fullstack-content">
        {data.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Fullstack;
