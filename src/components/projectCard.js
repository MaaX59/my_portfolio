import React from "react";
import "./projectCard.css";

const projectCard = ({ project }) => {
  return (
    <div className="app__projectCard">
      <div className="app__projectCard-constent">
        <div className="app__projectCard-constent_name">{project.name}</div>
        <div className="app__projectCard-constent_img">
          <img src={project.img} alt="project preview" />
        </div>
        <div className="app__projectCard-constent_description">
          {project.description}
        </div>
        <div className="app__projectCard-links">
          <div className="app__projectCard-links_site">{project.link}</div>
          <div className="app__projectCard-links_code">{project.code}</div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
