// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Carousel.css';
import carouselData from '../carouselData.json';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay interval={2000} infiniteLoop  showThumbs={false}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
