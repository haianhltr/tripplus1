
import React from 'react';
import '../../App.css';

import '../AboutUs.css';
import './Products.css';
import CardItem from '../CardItem';
import { Button } from '../Button';
import '../HeroSection.css';


function Products() {
    return (
        <div className='about-us2'>
       
       <div className='cards__item__pic-wrap2' >
       <h1>First travel insurance market place</h1>
      <p>Quickly get right travel insurance</p>
            <img
              className='cards__item__img2'
              alt='Travel Image'
              src='https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            /> 

          </div>








          <div className='our_products'>
          <h1>OUR PRODUCT</h1>
      <p>Tripplus is a bridge that provides best solution for both Insurers and Traveler. Data-driven enables us to provides our value customers with best-fit travel insurance coverage.</p>
      </div>
   
        <div className='cards__wrapper3'>
        <div className='cards__item__pic-wrap3' >
            <img
              className='cards__item__img3'
              alt='Travel Image'
              src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
           
            />
            
          </div>

         

         
        <div className='cards__container3'>
        <h2>HOW IT WORKS</h2>
        <h1>EMERGING ARTIFICIAL INTELLIGENCE</h1>
        <p>We learn from you and maintain it in our knowledge database. This empowers Tripplus to produce more and more helpful advise to our customer.</p>
         
          </div>
        </div>


        <div className='cards__wrapper4'>
        <div className='cards__item__pic-wrap4' >
            <img
              className='cards__item__img4'
              alt='Travel Image'
              src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
           
            />
            
          </div>

         

         
        <div className='cards__container4'>
        <h2>FOR WHETHER BUSINESS OR PLEASURE TRIP</h2>
        
        <p>Our goal is to give you the resources that you need to avoid unexpected expenses by finding a protective travel insurance policy that is tailored to your needs no matter what the purpose of your trip.</p>
         <p>Our key features and advantages: </p>
      
   
         <ul class ='list1'>
  <li>Personalize for you</li>
  <li>User-friendly interface</li>
  <li>Secure purchase</li>
  <li>Easily keep trach all plans, documents</li>
</ul>  




          </div>
        </div>

      <div className = 'Travel_insurance_news'>
      <h1>Travel Insurance news</h1>
      <ul class ='list2'>
  <li>Insurance 2030—The impact of AI on the future of insurance</li>
  <li>What’s happening in Canada and around the world on Sunday</li>
  <li>Vaccination passport</li>
  <li>Travel insurance in 2021</li>
</ul>  




      </div>

      </div>
      
  
    );
  }
export default Products;

