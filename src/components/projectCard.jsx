import React from "react";
import "./projectCard.css";


const projectCard = ({ project }) => {
  const { name, description, img, link, code } = project;
  console.log(project.img)
  return (
    <div className="app__projectCard">
      <div className="app__projectCard-constent">
        <div className="app__projectCard-constent_img">
          <img src={img} alt="project img" />
        </div>
        <div className="app__projectCard-content_name">
          <h1>{name}</h1>
        </div>

        <div className="app__projectCard-content_description">
          <h5>{description}</h5>
        </div>

        <div className="app__projectCard-links">
          <div className="app__projectCard-links_site">
            <a href={link}>
              Visit
            </a>
          </div>
          <div className="app__projectCard-links_code">
            <a href={code}>
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
