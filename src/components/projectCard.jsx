import React from "react";
import "./projectCard.css";
import pic from '../images/finedine.png'

const projectCard = ({ project }) => {
  const { name, description, img, link, code } = project;
  return (
    <div className="app__projectCard">
      <div className="app__projectCard-constent">
        <div className="app__projectCard-constent_img">

          <img src={pic} alt="project w" />

        </div>
        <div className="app__projectCard-constent_name">
        <h1>{name}</h1>
        </div>

        <div className="app__projectCard-constent_description">
          <h5>{description}</h5>
          
        </div>

        <div className="app__projectCard-links">
          <div className="app__projectCard-links_site">
            <a href={link}>
              <button>Visit</button>
            </a>
          </div>
          <div className="app__projectCard-links_code">
            <a href={code}>
              <button>Source</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
