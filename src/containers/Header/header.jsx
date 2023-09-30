import React from 'react';
import "./header.css";
import BackgroundAnimation from '../../components/backgroundAnimation';

const Header = ()=>{
  return (
    <div className='app__header'>
    <div className='app__header-intro' >
      <h1>Hello there!<br/> I´m Max, welcome to my portfolio!</h1>
    
    </div>
    <div className='app__header-animation'>
      <BackgroundAnimation />
    </div>
    

    </div>
  )
}

export default Header;