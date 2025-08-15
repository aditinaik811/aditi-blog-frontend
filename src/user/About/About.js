import React from 'react';
import './About.css'; // Importing CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={require('../../assets/ARN_Blog.png')}  alt="Aditi Ravindra Naik"
          className="about-image"
        />
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi, I’m <strong>Aditi Ravindra Naik</strong> — a passionate blogger who loves sharing
          thoughts, stories, and ideas with the world.  
          Through my blog, I aim to inspire, inform, and spark creativity in
          readers. Whether it's personal experiences, creative writing, or
          thought-provoking insights, you'll always find something unique here.
        </p>
      </div>
    </div>
  );
};

export default About;
