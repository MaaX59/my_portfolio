import React from "react";
import "./projectCard.css";



//for some reson my img props dosent work so i´m gonna do it like this for now
import deal from '../images/deal_zone.png';
import fine from '../images/finedine.png';
// import codeing from '../images/coding_generator.png';


const projectCard = ({ project}) => {
  const { name, description, image, link, code, tags } = project;
  
//   {  }   let img = null;

//   if(project.name === "DealZone"){
// let img = deal;
//   }else if (project.name === "M2 Coding generator"){
//     let img = code;
// } else {
//   let img = fine;}
// console.log(pict);
console.log(deal);
console.log(fine);
console.log(image);

 

  return (
 
    <div className="app__projectCard">
      <div className="app__projectCard-constent">
        <div className="app__projectCard-constent_img">
          <img src={image} alt="project img"  />
        </div>
        <div className="app__projectCard-content_name">
          <h1>{name}</h1>
        </div>

        <div className="app__projectCard-content_description">
          <h5>{description}</h5>
        </div>
        <div className="app__projectCard-content_tech">
        <h1>Stack</h1>
        <div className="app__projectCard-content_tags">
       {tags.map((tag, index)=>{
        return (
          <div className="app__projectCard-content_tags-tag" key= {index}>{tag}</div>
        )
       })}
</div>
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
