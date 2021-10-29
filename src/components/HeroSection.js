import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    
    <div className='frontpagebackgroundpanel' >
    <h1>Welcome to Tripplus</h1>
      <p>Stay protected no matter where your travels take you</p>
            <img
              className='frontpagebackgroundimage'
              alt='Travel Image'
              src='images/img-home.jpg'
           
            />
            
          <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        path='/products'
      >
        GET STARTED
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      
      >
        MORE DETAILS <i className='far fa-play-circle' />
      </Button>
    </div>


          </div>














    
    </div>
  );
}

export default HeroSection;
