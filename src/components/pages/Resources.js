import React from 'react';
import '../../App.css';
import './Resources.css';
import ResourcesCard from './ResourcesCard';

function Resources() {
  return (
    <div className='rscards'>
   
      <div className='rscards__container'>
        <div className='rscards__wrapper'>
          <ul className='rscards__items'>
            <ResourcesCard
              src='images/resourcestabimage-1.jpeg'
              text='Insurance 2030—The impact of AI on the future of insurance'
              desc='The industry is on the verge of a seismic, tech-driven shift. A focus on four areas can position carriers to embrace this change. Four AI-related trends shaping insuranceAI’s underlying technologies are already being deployed in our businesses, homes, and vehicles, as well as on our person. The disruption from COVID-19 […]'
              label='Posted April 4, 2021'
              path='/resources'
            />
            <ResourcesCard
              src='images/resourcestabimage-2.jpeg'
              text='What’s happening in Canada and around the world on Sunday'
              desc='Trudeau urges Canadians to check up on loved ones, celebrate safely for Easter. Canada’s chief public health officer is urging people to keep their guard up as COVID-19 disrupts Easter celebrations for a second year. Canadians need to be careful since the more contagious variants of concern “could be anywhere,” […]'
              label='Posted April 4, 2021'
              path='/resources'
            />
             <ResourcesCard
              src='images/resourcestabimage-2.png'
              text='Vaccination passport'
              desc='Proposals for such requirements are ripe for backsliding towards discrimination, writes Allan Richarz No vaccine, no service? As the distribution of the much-anticipated coronavirus vaccine continues its rollout worldwide, with varying degrees of progress, there is troubling talk from governments and organizations over requiring evidence of vaccination to obtain goods and services such as airline flights post-pandemic. While […]'
              label='Posted April 4, 2021'
              path='/resources'
            />
          </ul>
        
          <ul className='rscards__items'>
            <ResourcesCard
              src='images/resourcestabimage-4.jpeg'
              text='Travel insurance in 2021'
              desc='While it may not be as easy as it once was, finding comprehensive travel insurance is still possible, even during a pandemic. Here we answer the most common questions about choosing travel insurance in 2021, from finding specialist providers for “no-go” destinations to how to make a claim. Will insurers […]'
              label='Posted April 4, 2021'
              path='/resources'
            />
           
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Resources;