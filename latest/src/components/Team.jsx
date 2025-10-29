import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "With over 15 years of experience in social work, Dr. Priya founded The Project Smile to bring sustainable change to communities.",
      expertise: ["Community Development", "Healthcare Policy", "Leadership"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Rajesh oversees all our programs and ensures effective implementation across different communities and regions.",
      expertise: ["Project Management", "Field Operations", "Strategy Planning"]
    },
    {
      id: 3,
      name: "Dr. Anjali Patel",
      role: "Medical Head",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Leading our healthcare initiatives, Dr. Anjali brings medical expertise to our community health programs.",
      expertise: ["Public Health", "Medical Camps", "Health Education"]
    },
    {
      id: 4,
      name: "Meera Singh",
      role: "Education Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Meera leads our educational programs and works directly with schools and communities to improve literacy rates.",
      expertise: ["Curriculum Development", "Teacher Training", "Child Psychology"]
    },
    {
      id: 5,
      name: "Amit Verma",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Amit manages our digital initiatives and helps integrate technology solutions into our programs.",
      expertise: ["Digital Solutions", "Data Management", "Tech Training"]
    },
    {
      id: 6,
      name: "Sunita Devi",
      role: "Community Relations",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Sunita builds strong relationships with local communities and ensures our programs meet their specific needs.",
      expertise: ["Community Engagement", "Cultural Sensitivity", "Local Partnerships"]
    }
  ];

  return (
    <div className="team-page">
      {/* Header Section */}
      <div className="team-header">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>
            Dedicated individuals working together to create positive change in communities across the nation
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-members">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">📧</a>
                      <a href="#" className="social-link">📞</a>
                      <a href="#" className="social-link">🔗</a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  
                  <div className="team-expertise">
                    <h4>Expertise:</h4>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="expertise-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="team-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding, putting people first in everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We work together with communities, partners, and stakeholders to create sustainable solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Impact</h3>
              <p>We measure our success by the positive change we create in the lives of people and communities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in all our programs and maintain transparency in our operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Team Section */}
      <div className="join-team">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>
            Are you passionate about making a difference? We're always looking for dedicated individuals 
            who share our vision of creating positive change in communities.
          </p>
          <div className="join-buttons">
            <button className="btn-primary">View Open Positions</button>
            <button className="btn-secondary">Volunteer With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;