import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutUs.css';
import CardItem from './CardItem';


function AboutUs() {
    return (
        <div className='about-us'>
       
        
   
        <div className='cards__wrapper1'>
        {/* <figure className='cards__item__pic-wrap1' >
            <img
              className='cards__item__img1'
              alt='Travel Image'
              src='images/img-3.jpg'
           
            />
            
          </figure> */}

         
        <div className='cards__container1'>
        <h2>WE ARE PASSIONATE TO BRING YOU NEW SOLUTION</h2>
        <h1>ABOUT US</h1>
        <p>We are Canadian-based start-up company who committed to delivering a reliable and user-friendly application  that help our customer get the best travel insurance coverage. Through our data-driven enabled advisor, we strike to reshape the way of purchasing travel insurance in our application.</p>
         
          </div>
        </div>
      </div>
  
    );
  }
export default AboutUs;

