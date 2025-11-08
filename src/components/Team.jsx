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
      image: "/images/md-sakim.png",
      description: "Mr. MD Sakim, a committed Trustee aged 38 and the son of Mr. Saidur Rahernan, resides in Jhilbasti, Kishanganj, Bihar. As a Trustee, he is an integral part of the Executive Committee, sharing the responsibility for the overall management and administration of the Trust. His role is vital in authorizing the utilization of Trust funds towards achieving the core objectives of the organization, such as education and social welfare initiatives, ensuring transparency and adherence to the Trust Deed."
    },
    {
      id: 2,
      name: "SAJID HUSSAIN",
      role: "Trustee",
      image: "/images/sajid-hussain.png",
      description: "Mr. Sajid Hussain, a young and dedicated Trustee aged 25, is the son of Mr. Latifur Rahman, residing in Faringora, Kishanganj, Bihar, and working in Social Service. As a Trustee, he plays an active role in advancing the determined goals and functions of the Trust. He collaborates closely with the other Trustees and Executive Members to ensure that all Trust operations are conducted legally and ethically, prioritizing the delivery of assistance to the communities in need."
    },
    {
      id: 3,
      name: "ROHAN KUMAR PANDIT",
      role: "Trustee",
      image: "/images/rohan-kumar-pandit.png",
      description: "Mr. Rohan Kumar Pandit, aged 25, is a dedicated social worker and a Trustee, residing in Churli Besarbati, Kishanganj, Bihar. He is the son of Mr. Kuldeep Pandit. According to the Trust Deed, his primary duty, alongside other Trustees, is to manage the entirety of the Trust's affairs. He specifically contributes to the successful implementation of key programs related to education, employment, and social awareness, bringing the Trust's mission to the grassroots level."
    },
    {
      id: 4,
      name: "SANGITA KUMARI",
      role: "Trustee",
      image: "/images/sangita-kumari.png",
      description: "Ms. Sangita Kumari, aged 18, is the youngest and one of the pivotal Trustees of 'THE PROJECT SMILE.' She is the wife of Mr. Bhabhak Lal Singh and a resident of Old Mechi, Jirangachh, Kishanganj, Bihar, with a background in Social Service. As a Trustee, she is entrusted with upholding the rules and conditions of the Trust. She assists the Executive Committee in decision-making and the utilization of funds, particularly contributing significantly to social welfare objectives like women empowerment and the prevention of social evils such as Child Marriage and the Dowry System."
    }
  ];

  // Founders and Leadership
  const founders = [
    {
      id: 1,
      name: "MD MEHRUDDIN",
      role: "Founder/Chairman (Author/Settlor)",
      image: "/images/md-mehruddin.png",
      description: "Mr. MD Mehruddin is the visionary Founder and current Chairman of 'THE PROJECT SMILE.' At 29 years old, he is the son of Mr. MD Mahtab Ali and a dedicated social worker residing in Jhilbasti, Mirzapur, Kishanganj, Bihar. In his capacity as Chairman, he holds the crucial authority for executive supervision over all institutions established by the Trust. He is responsible for all official correspondence, which must bear his signature or be issued under his direction. Furthermore, he has the power to operate the Trust's bank accounts, either solely or jointly with the President, and is responsible for convening all necessary Trust meetings."
    },
    {
      id: 2,
      name: "SHAJAHAN ALI",
      role: "Co-Founder/Secretary",
      image: "/images/shajahan-ali.png",
      description: "Mr. Shahajahan Ali is the Co-Founder and Secretary of the organization. Aged 39, he is the son of Mr. MD Rafik and resides in Jheel Basti, Taiyabpur, Kishanganj, Bihar, with a profession in Social Service. As the Secretary, he diligently executes the Chairman's directives, which include convening all Trust meetings and preparing the meeting agenda. His principal duties involve the proper maintenance of the Trust's office and all essential registers under the Chairman's supervision. He is also responsible for ensuring that the Trust's accounts are audited according to the established rules."
    },
    {
      id: 3,
      name: "MD SAIDUL HAQUE",
      role: "Treasurer",
      image: "/images/md-saidul-haque.png",
      description: "Mr. MD Saidul Haque, aged 29, serves as the Treasurer for 'THE PROJECT SMILE.' He is the son of Mr. MD Smail, a resident of Lalbari Bhurnai, Kishanganj, Bihar, and works in Social Service. The primary responsibility of the Treasurer is to manage the Trust's financial affairs as directed by the committee. This involves receiving all payments and disbursing funds that have been formally passed by the Chairman or Secretary. He is required to maintain proper books of accounts and is authorized to deposit and withdraw the Trust's funds from the bank or post office. Please note that withdrawals require the joint signature of any two among the Secretary, President, or Treasurer."
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