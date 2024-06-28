// src/components/Marquee.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import marqueeData from '../marqueeData.json';
import './Marquee.css';

const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee gradient={true} gradientColor={[255, 255, 255]} speed={40} gradientWidth={100}>
        {marqueeData.map((item, index) => (
          <div key={index} className="marquee-card">
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <h6>{item.description}</h6>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
