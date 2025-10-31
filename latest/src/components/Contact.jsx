import React, { useState } from 'react';
import './Contact.css';
import { saveContactForm } from '../firebaseConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  // Web3Forms Configuration
  const WEB3FORMS_ACCESS_KEY = "7a538f0b-1046-4564-b673-806ca0e94836";

  const sendWeb3FormsEmail = async (formData) => {
    try {
      console.log('📧 Sending email via Web3Forms...');
      
      const web3FormData = new FormData();
      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", formData.phone || 'Not provided');
      web3FormData.append("message", formData.message);
      web3FormData.append("subject", `New Contact Form Submission from ${formData.name}`);
      web3FormData.append("from_name", "The Project Smile Website");
      web3FormData.append("to_email", "muskanperween24@navgurukul.org");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Email sent successfully via Web3Forms');
        return { success: true };
      } else {
        console.error('❌ Web3Forms email sending failed:', result);
        return { success: false, error: result.message || 'Failed to send email' };
      }
    } catch (error) {
      console.error('❌ Web3Forms API request failed:', error);
      return { success: false, error: `API Error: ${error.message}` };
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
    setSubmitResult("Sending message...");
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitResult("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('📝 Submitting form data:', formData);
      
      // Save to Firebase first
      const firebaseResult = await saveContactForm(formData);
      
      if (firebaseResult.success) {
        console.log('✅ Data saved to Firebase');
        
        // Send email notification via Web3Forms
        const emailResult = await sendWeb3FormsEmail(formData);
        
        if (emailResult.success) {
          setSubmitResult("✅ Message sent successfully! We will get back to you soon.");
          
          // Reset form after successful submission
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: ''
            });
            setSubmitResult("");
          }, 3000);
          
        } else {
          setSubmitResult("✅ Message saved! We received your message and will contact you soon.");
          console.log('Email may have failed but Firebase saved the data');
        }
      } else {
        setSubmitResult("❌ Failed to send message. Please try again.");
        console.error('Firebase save failed:', firebaseResult.error);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitResult("❌ Error sending message. Please try again.");
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
              
              {submitResult && (
                <div className={`submit-result ${submitResult.includes('✅') ? 'success' : 'error'}`}>
                  {submitResult}
                </div>
              )}
            </form>
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