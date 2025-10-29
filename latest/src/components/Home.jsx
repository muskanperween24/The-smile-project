import React from 'react'
import './Home.css'



const Home = () => {
  return (
    <div id="home">
      {/* Hero Section with NGO Background */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="smile-text">SMILE</div>
          <div className="impact-quote">
            "A smile is the shortest distance between two hearts"
          </div>
          <p className="hero-description">
            Transforming lives through compassion, care, and community support
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join Our Mission</button>
            <button className="btn-secondary">Make a Donation</button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-text">
            At The Project Smile, we believe every person deserves to smile with dignity and hope. 
            We work tirelessly to bring positive change to underprivileged communities through 
            education, healthcare, and sustainable development programs.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25,000+</h3>
              <p>Lives Touched</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Villages Reached</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Children Educated</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Program Section */}
      <div id="programs" className="programs-section">
        <div className="container">
          <h2>Our Program</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon education-icon">📚</div>
              <h3>Education for All</h3>
              <p>Providing quality education and learning resources to underprivileged children in rural and urban areas.</p>
            </div>
            <div className="program-card">
              <div className="program-icon health-icon">🏥</div>
              <h3>Healthcare Support</h3>
              <p>Organizing free medical camps and health awareness programs for communities in need.</p>
            </div>
            <div className="program-card">
              <div className="program-icon community-icon">🤝</div>
              <h3>Community Development</h3>
              <p>Empowering communities through skill development, women empowerment, and sustainable livelihood programs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <h2>Be Part of the Change</h2>
          <p>Together, we can create a world where everyone has a reason to smile</p>
          <div className="cta-buttons">
            <button className="btn-primary">Volunteer With Us</button>
            <button className="btn-secondary">Support Our Cause</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home