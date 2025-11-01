import React from 'react';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      {/* Hero Section */}
      <section className="learn-more-hero">
        <div className="hero-content">
          <div className="hero-vision-mission">
            <div className="hero-vision">
              <h2>Our Vision</h2>
              <p>A world where every child smiles freely — educated, healthy, and full of hope.</p>
            </div>
            <div className="hero-mission">
              <h2>Our Mission</h2>
              <p>To bring sustainable change through education, empowerment, and empathy — one smile at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="learn-more-container">
        
        {/* About Us Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>About The Project Smile</h2>
          </div>
          <div className="content-text">
            <p>
              The Project Smile is a non-profit organization that works to bring smiles to the lives of 
              underprivileged children, women, and communities. Our mission is to ensure that every person — 
              no matter where they are born — gets equal opportunities to learn, grow, and live with dignity. 
              We focus on building a society where education is a right, not a privilege.
            </p>
            <p>
              We believe that true change begins with small steps — a book in a child's hand, a class full of 
              laughter, a woman gaining confidence, or a community standing together for progress.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="content-section alternate-bg">
          <div className="section-header">
            <h2>What We Do</h2>
          </div>
          <div className="content-text">
            <p>At The Project Smile, we run multiple programs that focus on:</p>
            
            <div className="programs-grid">
              <div className="program-item">
                <div className="program-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3002/3002543.png" alt="Education" />
                </div>
                <h3>Education for All</h3>
                <p>Helping children who have dropped out of school to rejoin through our Smile Learning Centres.</p>
              </div>
              
              <div className="program-item">
                <div className="program-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="Health" />
                </div>
                <h3>Health & Hygiene Awareness</h3>
                <p>Organizing medical check-ups, hygiene workshops, and health campaigns.</p>
              </div>
              
              <div className="program-item">
                <div className="program-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/9408/9408201.png" alt="Women Empowerment" />
                </div>
                <h3>Women Empowerment</h3>
                <p>Training women in basic skills so that they can become financially independent and confident.</p>
              </div>
              
              <div className="program-item">
                <div className="program-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1973/1973800.png" alt="Community" />
                </div>
                <h3>Community Development</h3>
                <p>Working with local leaders to spread awareness about social issues and create long-term positive change.</p>
              </div>
            </div>
            
            <p className="additional-info">
              Our team regularly visits rural and urban slum areas, identifies children in need, and supports them 
              through free learning materials, mentoring, and personal guidance.
            </p>
          </div>
        </section>

        {/* How We Do It Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>How We Do It</h2>
          </div>
          <div className="content-text">
            <p>
              We work hand in hand with volunteers, teachers, and community leaders. Our field workers and 
              coordinators conduct surveys, connect with families, and encourage them to send their children back to school.
            </p>
            <p>
              We also conduct evening classes, counselling sessions, and cultural activities that build confidence 
              and creativity among children.
            </p>
            <p>
              We raise funds through donations, awareness campaigns, and collaborations with kind-hearted individuals 
              who want to make a difference. Every contribution — small or big — helps us light another candle of hope.
            </p>
          </div>
        </section>

        {/* Why We Do It Section */}
        <section className="content-section alternate-bg">
          <div className="section-header">
            <h2>Why We Do It</h2>
          </div>
          <div className="content-text">
            <p>
              We do this work because we believe that every smile has a story. Behind every smile is a child who 
              dreams of becoming a teacher, a doctor, or a change-maker. Many children in our society still live in 
              poverty, face discrimination, and lose access to education due to their circumstances.
            </p>
            <p>
              The Project Smile was born from the idea that no child should ever lose their smile because of poverty 
              or inequality. Our goal is not only to provide education but also to give every child hope, courage, 
              and confidence to dream big.
            </p>
            <p>
              We do it because we care. We do it because we believe that a single act of kindness can create a wave of change.
            </p>
          </div>
        </section>



      </div>
    </div>
  );
};

export default LearnMore;