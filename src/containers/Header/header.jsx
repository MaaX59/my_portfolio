import React from 'react';
import "./header.css";
import BackgroundAnimation from '../../components/backgroundAnimation';
import headshot from '../../images/stylized_headshot - Copy.png'

const Header = ()=>{
  return (
    <div className='app__header'>
    <div className='app__header-intro' >
      <h1>Hello there, I´m&nbsp;<span style={{color:"red"}}>Max</span> </h1>
      <div className='app__header-animation'>
      <img src={headshot} alt="headshot" />
      <BackgroundAnimation />
    </div>
       <br/> <h2>As a fullstack web developer, my aim is to create simple, yet beautiful applications to enrich the web!</h2>
       {/* <br/> <h3>Scroll down to check out my projects!</h3> */}
    
    </div>
     
    
    
   
    
    

    </div>
  )
}

export default Header;