import React from 'react';
import { Link } from 'react-router-dom';

function ItemPanel(props) {
  return (
    <>
      <li className='panel__item'>
        <Link className='panel__item__link' to={props.path}>
          <figure className='panel__item__pic-wrap' data-category={props.label}>
            <img
              className='panel__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='panel__item__info'>
            <h5 className='panel__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ItemPanel;