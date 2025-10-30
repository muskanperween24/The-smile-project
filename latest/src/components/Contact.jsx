import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent('Hi, I would like to know more about The Project Smile.');
    const phoneNumber = '911234567890'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Connect with us to learn more about our work or get involved</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-message-btn">
                <span>✈</span> Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-item">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@projectsmilepathways.org</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <span>📞</span>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 123 456 7890</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>New Delhi, India</p>
              </div>
            </div>

            <button className="whatsapp-btn" onClick={handleWhatsAppMessage}>
              <span>💬</span> Message on WhatsApp
            </button>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="map-section">
          <div className="map-header">
            <h2>Find Us Here</h2>
            <p>Visit us at our location in New Delhi</p>
          </div>
          
          <div className="map-container">
            <div className="map-overlay">
              <div className="map-info">
                <h3>📍 Our Location</h3>
                <p>New Delhi, India</p>
                <button className="directions-btn" onClick={() => window.open('https://maps.google.com/?q=New+Delhi,India', '_blank')}>
                  <span>🧭</span> Get Directions
                </button>
              </div>
            </div>
            
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397262629!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699634400000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Project Smile Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;