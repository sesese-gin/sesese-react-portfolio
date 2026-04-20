import React from 'react';
import './Hero.css';

function Hero({ baseUrl }){
    return(
        <section id="home" className="section-wrapper">
          <div className="home-box js-fade-up">
            <h2 className="hero-title">Hello, World.</h2>
            <p className="intro-text">
              ここには私の作品と、<br />
              ちょっとした日常が詰まっています。<br />
              ゆっくりしていってください。
            </p>
          </div>
        </section>
    );
}

export default Hero;