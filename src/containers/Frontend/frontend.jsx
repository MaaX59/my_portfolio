import React from 'react';
import "./frontend.css"
import data from "../../data/frontend";
import ProjectCard from '../../components/projectCard';

const Frontend = ()=>{
  return (
    <div className='app__frontend' id='frontend'>
      <div className='app__frontend-title'>
        <h1>Frontend</h1>
      </div>
      <div className='app__frontend-content'>
      
        {data.map((project, index)=>

        <ProjectCard project={project} key={project.id}/>)}
      </div>
    </div>
  )
}

export default Frontend