import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  // Trustees
  const trustees = [
    {
      id: 1,
      name: "MD SAKIM",
      role: "Trustee",
      image: "/images/sajid-hussain.png",
      description: "Dedicated trustee committed to the organization's mission and vision, bringing valuable guidance and oversight to our initiatives."
    },
    {
      id: 2,
      name: "SAJID HUSSAIN",
      role: "Trustee",
      image: "/images/sajid-hussain.png",
      description: "Experienced trustee who provides strategic direction and ensures ethical governance in all organizational activities."
    },
    {
      id: 3,
      name: "ROHAN KUMAR PANDIT",
      role: "Trustee",
      image: "/images/rohan-kumar-pandit.png",
      description: "Brings a deep-rooted sense of responsibility and burgeoning confidence to his work as trustee, ensuring organizational accountability."
    },
    {
      id: 4,
      name: "SANGITA KUMARI",
      role: "Trustee",
      image: "/images/sangita-kumari.png",
      description: "Passionate trustee focused on community development and ensuring the organization's programs reach those who need them most."
    }
  ];

  // Founders and Leadership
  const founders = [
    {
      id: 1,
      name: "MD MEHRUDDIN",
      role: "Founder/Chairman",
      image: "/images/md-mehruddin.png",
      description: "Madad, mehnat aur mannat (help and hard work, good wishes) are never wasted. If people achieve their dreams through my work, my dream would be achieved."
    },
    {
      id: 2,
      name: "SHAJAHAN ALI",
      role: "Co-Founder/Secretary",
      image: "/images/shajahan-ali.png",
      description: "Co-founder dedicated to building sustainable programs and ensuring effective coordination between all organizational activities."
    },
    {
      id: 3,
      name: "MD SAIDUL HAQUE",
      role: "Treasurer",
      image: "",
      description: "Experienced treasurer ensuring financial transparency and efficient resource management for maximum impact in community programs."
    }
  ];

  return (
    <div className="team-page">
      {/* Header Section */}
      <div className="team-header">
        <div className="team-header-content">
          <div className="team-title-section">
            <h1>Meet <span className="highlight">Our Team</span></h1>
          </div>
          <div className="team-description-section">
            <p>
              We're a cross-cultural team, passionate about creating opportunities for rural communities, prioritizing lifelong learning, and ecological balance toward positive change.
            </p>
          </div>
        </div>
      </div>

      {/* Trustees Section */}
      <div className="team-section">
        <div className="section-header">
          <h2>Trustees</h2>
        </div>
        <div className="team-members-grid">
          {trustees.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <button className="read-more-btn" onClick={() => openModal(member)}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founders & Leadership Section */}
      <div className="team-section">
        <div className="section-header">
          <h2>Founders & Leadership</h2>
        </div>
        <div className={`team-members-grid ${founders.length === 3 ? 'three-items' : ''}`}>
          {founders.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <button className="read-more-btn" onClick={() => openModal(member)}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
              </div>
            </div>
            <div className="modal-body">
              <p>{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;