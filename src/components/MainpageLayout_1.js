import React from 'react';
import './MainpageLayout_1.css';
import ItemPanel from './ItemPanel';

function MainpageLayout_1() {
  return (
    <div className='allcomponents'>
      <h1>TRIPPLUS</h1>
      <p>Do you know the COVID-19 pandemic has reshaped the travel insurance in unexpected way? We are the Canadian-based start-up company who are developing the solution for post-pandemic travel BOOM.</p>
      <div className='components__container'>
        <div className='components__wrapper'>
          
          <ul className='components__items'>
            <ItemPanel
              src='images/img-3.jpg'
              text='Provide clear and easy navigate comparison shopping of travel insurance plans.'
              label='Convenient mobile-app'
              path='/resources'
            />
            <ItemPanel
              src='images/img-4.jpg'
              text='Assisting travelers in understanding and identifying key points of plan policies that can affect their coverage
              No more meticulous researches!'
              label='Data driven enabled advisor'
              path='/products'
            />
            <ItemPanel
              src='images/img-8.jpg'
              text='Deliver faster and more efficient customer service'
              label='Chatbot'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainpageLayout_1;