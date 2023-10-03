import React from 'react';
import "./header.css";
import BackgroundAnimation from '../../components/backgroundAnimation';

const Header = ()=>{
  return (
    <div className='app__header'>
    <div className='app__header-intro' >
      <h1>Hello there, I´m Max.</h1>
      
       <br/> <h2>Welcome to my portfolio!</h2>
    
    </div>
    <div className='app__header-animation'>
      <BackgroundAnimation />
    </div>
    

    </div>
  )
}

export default Header;