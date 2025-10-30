import React from 'react';
import './Program.css';

const Program = () => {
  return (
    <div className="programs-page">
      <div className="container">
        <h1>Our Programs</h1>
        <div className="programs-content">
          <div className="program-section">
            <h2>Education Program</h2>
            <p>
              Providing quality education and learning resources to underprivileged children 
              in rural and urban areas. We run schools, libraries, and skill development programs.
            </p>
          </div>
          
          <div className="program-section">
            <h2>Health Program</h2>
            <p>
              Organizing free medical camps, health awareness programs, and providing 
              essential healthcare services to communities in need.
            </p>
          </div>
          
          <div className="program-section">
            <h2>Women Empowerment</h2>
            <p>
              Empowering women through skill development, entrepreneurship training, 
              and creating sustainable livelihood opportunities.
            </p>
          </div>
          
          <div className="program-section">
            <h2>Community Development</h2>
            <p>
              Working with local communities to improve infrastructure, sanitation, 
              and overall quality of life through sustainable development initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;