import React from 'react';
import './Students.css';
import studentData from './studentData';

export const Students = ({student}) => {

  return (
    <div className='StudentApp'>
       <div className="studentCard">
        <div className="image-section">
          <img className='studentImg' src={student.imgSrc} alt={`${student.name}'s profile`} />
        </div>
        <div className="studentinfo">
          <span>{student.name}</span>
          <span>{student.skill}</span>
          <p>{student.description}</p>
          <button class="RMbtn">Read more</button>
          <div class="social-media">
          <img src="/src/assets/icons/facebook.svg" alt=""/>
                <img src="/src/assets/icons/instagram.svg" alt=""/>
                <img src="/src/assets/icons/reddit.svg" alt=""/>
                <img src="/src/assets/icons/twitter.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
