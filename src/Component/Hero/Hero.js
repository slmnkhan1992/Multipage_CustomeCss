import React from 'react';
import './style.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Platform</h1>
        <p className="hero-subheading">
          Discover amazing products and learn new skills!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
