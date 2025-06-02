import React from 'react';
import Team from '../public/team.png'; // adjust path as needed
import './About.css';

function About() {
  return (
    <div className="about-page">
      <img src={Team} alt="About Visual" className="about-hero" />
      <div className="about-content">
        <h1>About US</h1>
        <p>This is where your story goes...</p>
      </div>
    </div>
  );
}

export default About;
