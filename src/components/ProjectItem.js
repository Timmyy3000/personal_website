import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectItem(props) {
  return (
    <>

      <li className={props.className}>
   
        <a className='project__item__link' href={props.path}>   
        <ScrollAnimation animateIn='fadeIn' duration={0.5}>
          <figure className='project__item__pic-wrap' data-category={props.label}>
            <img
              className='project__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='project__item__info'>
            <h5 className='project__item__text'>{props.text}</h5>
            <h5 className='project__item__graphics_text'>{props.graphics}</h5>
            {props.indev ? <h6 className='project__item__indev'>Status : In Development</h6>: ''}
            <h6 className='project__item__dets'>{props.dets}</h6>
          </div></ScrollAnimation>
        </a>
        
      </li>
    </>
  );
}

export default ProjectItem;