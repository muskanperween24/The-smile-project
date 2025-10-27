import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to The Smile Project</h1>
          <p className="hero-subtitle">
            Spreading happiness and positivity, one smile at a time
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">😊</div>
              <h3>Spread Joy</h3>
              <p>Share your smile and brighten someone's day</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Inspire Others</h3>
              <p>Be the reason someone believes in the goodness of people</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💫</div>
              <h3>Create Impact</h3>
              <p>Make a positive difference in the world around you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About The Smile Project</h2>
              <p>
                The Smile Project is a movement dedicated to spreading happiness 
                and positivity through simple acts of kindness. We believe that 
                a single smile has the power to change someone's entire day.
              </p>
              <p>
                Join our community and be part of something bigger than yourself. 
                Together, we can make the world a brighter place.
              </p>
            </div>
            <div className="about-image">
              <div className="smile-emoji">😄</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home