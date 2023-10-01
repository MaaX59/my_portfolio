import React from 'react';
import "./tech.css"

const Tech = ()=>{
  return (
    <div className='app__tech' id='technologies'>
        <div className='app__tech-title'>
        <h1>Technologies</h1>
        </div>
        <div className='app__tech-content'>
        <div className='app__tech-content-left'>
          <h2>HTML</h2>
          <h2>Css3</h2>
          <h2>Tailwind</h2>
          <h2>React</h2>
        
        </div>
        <div className='app__tech-content-right'>
        <h2>Javascript</h2>
        <h2>Express.js</h2>
        <h2>Node.js</h2>
        <h2>MongoDb</h2>
        </div>

        </div>
      

    </div>
  )
}

export default Tech