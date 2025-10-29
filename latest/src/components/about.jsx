import React from "react";
import "./The-smile-project/latest/src/components/about.css"; // apni CSS file yahan link karni hai

const About = () => {
  return (
    <div>
      {/* 🔹 Hero Banner (Collage Background) */}
      <section className="hero-section">
        <div className="image-grid">
          <img src="images.jpeg" alt="" />
          <img src="student 1.jpg" alt="" />
          <img src="student.jpg" alt="" />
          <img src="images (3).jpeg" alt="" />
          <img src="images (2).jpeg" alt="" />
          <img src="images (1).jpeg" alt="" />
        </div>

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
              <img src="student 2.jpeg" alt="Our Work" />
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
              <img src="student.jpeg" alt="Our Team" />
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
    </div>
  );
};

export default About;
