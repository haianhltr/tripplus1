import React from 'react';
import { Link } from 'react-router-dom';

function ResourcesCard(props) {
  return (
    <>
      <li className='rscards__item'>
        <Link className='rscards__item__link' to={props.path}>
          <figure className='rscards__item__pic-wrap' data-category={props.label}>
            <img
              className='rscards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='rscards__item__info'>
            <h5 className='rscards__item__text'>{props.text}</h5>
           
          </div>
        </Link>
        
        <p className='rscards__item__desc'>{props.desc}</p>
      </li>
    </>
  );
}

export default ResourcesCard;