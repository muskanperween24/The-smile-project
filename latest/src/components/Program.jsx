import React from 'react';
import './Program.css';

const Program = () => {
  return (
    <div className="program-page">
      {/* Header Section */}
      <div className="program-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Making a difference through targeted interventions and community engagement</p>
        </div>
      </div>

      {/* Programs Detail Section */}
      <div className="programs-detail">
        <div className="container">
          
          {/* Education Program */}
          <div className="program-section">
            <div className="program-content">
              <div className="program-info">
                <div className="program-icon-large education-bg">
                  <span>📚</span>
                </div>
                <h2>Education for All</h2>
                <p className="program-description">
                  We believe education is the foundation of a better tomorrow. Our education program 
                  focuses on providing quality learning opportunities to underprivileged children 
                  and adults in rural and urban communities.
                </p>
                
                <div className="program-features">
                  <h3>What We Do:</h3>
                  <ul>
                    <li>Free primary and secondary education support</li>
                    <li>Digital literacy programs</li>
                    <li>Scholarship programs for meritorious students</li>
                    <li>Adult education and skill development</li>
                    <li>Library and learning resource centers</li>
                    <li>Teacher training and capacity building</li>
                  </ul>
                </div>

                <div className="program-impact">
                  <h3>Impact:</h3>
                  <div className="impact-stats">
                    <div className="impact-item">
                      <strong>5,000+</strong>
                      <span>Children Educated</span>
                    </div>
                    <div className="impact-item">
                      <strong>50+</strong>
                      <span>Schools Supported</span>
                    </div>
                    <div className="impact-item">
                      <strong>200+</strong>
                      <span>Scholarships Awarded</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Program */}
          <div className="program-section reverse">
            <div className="program-content">
              <div className="program-info">
                <div className="program-icon-large health-bg">
                  <span>🏥</span>
                </div>
                <h2>Healthcare Support</h2>
                <p className="program-description">
                  Healthcare is a basic human right. Our healthcare program ensures that quality 
                  medical care reaches the most vulnerable populations, focusing on preventive 
                  care and health awareness.
                </p>
                
                <div className="program-features">
                  <h3>What We Do:</h3>
                  <ul>
                    <li>Free medical camps and health checkups</li>
                    <li>Maternal and child health programs</li>
                    <li>Vaccination drives and immunization</li>
                    <li>Health awareness and nutrition education</li>
                    <li>Emergency medical assistance</li>
                    <li>Mental health support and counseling</li>
                  </ul>
                </div>

                <div className="program-impact">
                  <h3>Impact:</h3>
                  <div className="impact-stats">
                    <div className="impact-item">
                      <strong>15,000+</strong>
                      <span>Patients Treated</span>
                    </div>
                    <div className="impact-item">
                      <strong>100+</strong>
                      <span>Medical Camps</span>
                    </div>
                    <div className="impact-item">
                      <strong>80+</strong>
                      <span>Villages Covered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Development Program */}
          <div className="program-section">
            <div className="program-content">
              <div className="program-info">
                <div className="program-icon-large community-bg">
                  <span>🤝</span>
                </div>
                <h2>Community Development</h2>
                <p className="program-description">
                  Sustainable development happens when communities are empowered to take charge 
                  of their own growth. Our community development program focuses on building 
                  local capacity and creating sustainable solutions.
                </p>
                
                <div className="program-features">
                  <h3>What We Do:</h3>
                  <ul>
                    <li>Women empowerment and leadership training</li>
                    <li>Skill development and vocational training</li>
                    <li>Microfinance and entrepreneurship support</li>
                    <li>Water and sanitation projects</li>
                    <li>Environmental conservation initiatives</li>
                    <li>Youth development programs</li>
                  </ul>
                </div>

                <div className="program-impact">
                  <h3>Impact:</h3>
                  <div className="impact-stats">
                    <div className="impact-item">
                      <strong>3,000+</strong>
                      <span>Women Empowered</span>
                    </div>
                    <div className="impact-item">
                      <strong>500+</strong>
                      <span>Entrepreneurs Created</span>
                    </div>
                    <div className="impact-item">
                      <strong>25+</strong>
                      <span>Water Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Get Involved Section */}
      <div className="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p>Join us in making a difference. Every contribution counts!</p>
          <div className="involvement-options">
            <div className="involvement-card">
              <h3>🤝 Volunteer</h3>
              <p>Join our team of dedicated volunteers and make a direct impact in communities.</p>
              <button className="btn-involved">Become a Volunteer</button>
            </div>
            <div className="involvement-card">
              <h3>💝 Donate</h3>
              <p>Support our programs with financial contributions that help us reach more people.</p>
              <button className="btn-involved">Make a Donation</button>
            </div>
            <div className="involvement-card">
              <h3>📢 Spread Awareness</h3>
              <p>Help us reach more people by sharing our mission and programs with others.</p>
              <button className="btn-involved">Share Our Story</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;