import React, { useState } from 'react';
import './Contact.css';
import { saveContactForm } from '../firebaseConfig';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration - Replace with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_8x7mltp'; // Demo service ID
  const EMAILJS_TEMPLATE_ID = 'template_nv7k7mj'; // Demo template ID  
  const EMAILJS_PUBLIC_KEY = 'SybVoyAGepQO7wiR9'; // Demo public key

  const sendEmailNotification = async (formData) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_name: 'Muskan Perween',
        to_email: 'muskanperween24@navgurukul.org',
        reply_to: formData.email
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error.message };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('Submitting form data:', formData);
      
      // Save to Firebase
      const firebaseResult = await saveContactForm(formData);
      
      if (firebaseResult.success) {
        // Send email notification to muskanperween24@navgurukul.org
        const emailResult = await sendEmailNotification(formData);
        
        if (emailResult.success) {
          alert('Message sent successfully! We will get back to you soon.\nEmail notification sent to our team.');
        } else {
          alert('Message saved successfully! We will get back to you soon.\n(Email notification may have failed, but we received your message.)');
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert('Failed to send message: ' + firebaseResult.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
    
    setIsSubmitting(false);
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

              <button type="submit" className="send-message-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? '⏳' : '✈'}</span> 
                {isSubmitting ? 'Sending...' : 'Send Message'}
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