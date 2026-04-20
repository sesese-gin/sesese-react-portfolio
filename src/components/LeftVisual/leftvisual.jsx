import React from 'react';
import './leftVisual.css';

function LeftVisual({ baseUrl }){
    return(
    <div className="left-side">
        <img src={`${baseUrl}image-home/kame_picture-removebg-preview.png`} alt="背景のカメ" className="bg-image" />
        <div className="overlay-text">
          <p className="main-title ">MY WORLD</p>
        </div>
      </div>
    );
};

export default LeftVisual;
     