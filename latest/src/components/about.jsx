import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      {/* 🔹 Hero Banner with Background Image */}
      <section className="hero-section" style={{
        backgroundImage: 'url("/img12.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div className="overlay"></div>

        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            Promote innovative, sustainable community-owned models and replication
            of those models for lasting economic, social, environmental and human
            impact.
          </p>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Image + Right Text */}
          <div className="about-row">
            <div className="about-img">
              <img src="/img2.jpg" alt="Our Work" />
            </div>
            <div className="about-text">
              <h2>About The Project Smile</h2>
              <p>
                <strong>The Project Smile Trust</strong> is a registered non-profit
                organization under the <strong>Indian Trust Act, 1882</strong>. It was
                officially registered at the <strong>Sub Registry Office, Thakurganj, Bihar</strong> on{" "}
                <strong>12 July 2024</strong>.
              </p>
              <p>
                Our Trust was founded by <strong>Md. Mehruddin</strong> with a mission
                to create positive social change and improve the lives of
                underprivileged children and families.
              </p>
            </div>
          </div>

          {/* Why We Are Doing This */}
          <div className="about-row reverse">
            <div className="about-img">
              <img src="/img6.jpg" alt="Our Team" />
            </div>
            <div className="about-text">
              <h2>Why We Are Doing This</h2>
              <p>
                We believe that every child deserves education, care, and
                opportunity. Many children in rural and low-income communities
                struggle due to a lack of resources and guidance.
              </p>
              <p>
                <strong>The Project Smile</strong> works to provide education support,
                mentorship, and skill development to children and youth — helping
                them build confidence and live better lives.
              </p>
              <p>
                Our purpose is to promote{" "}
                <strong>innovative, sustainable, and community-owned models</strong> that
                bring lasting social and human impact. Together, we aim to create a
                society where every child can learn, grow, and smile.
              </p>
            </div>
          </div>

  </div>
      </section>
{/* Our Approach */}
          <div className="approach-section">
            <h2>Our Approach</h2>
            <br />
            
            <div className="approach-item">
              <h3><strong>Education Support:</strong></h3>
              <p>We help dropped-out and poor students to continue their studies through free classes, guidance, and school material.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Women & Girl Empowerment:</strong></h3>
              <p>We focus on girls' education, awareness, and vocational training so that women can become strong and independent.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Health & Medical Care:</strong></h3>
              <p>We organize health camps, awareness drives, and provide medical help to rural and needy people.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Old Age & Orphan Care:</strong></h3>
              <p>We take care of orphans and elderly people who have no one to look after them.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Youth Skill Development:</strong></h3>
              <p>We run training programs, workshops, and sports like Kung-Fu and Taekwondo to build youth confidence and skills.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Social Awareness:</strong></h3>
              <p>We conduct programs to spread awareness about education, politics, health, environment, and human rights.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Legal & Human Rights Aid:</strong></h3>
              <p>We help poor prisoners and innocent people get justice and legal assistance.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Environment Protection:</strong></h3>
              <p>We plant trees, manage waste, and spread awareness to protect nature and keep our surroundings clean.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>Disaster Relief:</strong></h3>
              <p>We provide help during floods, earthquakes, and other disasters through rescue, relief, and rebuilding work.</p>
            </div>
            
            <div className="approach-item">
              <h3><strong>No Profit – No Loss Work Model:</strong></h3>
              <p>All our programs run only for public welfare — not for money or personal benefit — ensuring honesty and transparency.</p>
            </div>
          </div>



      
    </div>
  );
};

export default About;
