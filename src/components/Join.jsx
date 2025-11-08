import React, { useState } from 'react';
import './Join.css';
import { saveContactForm } from '../firebaseConfig';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  // Web3Forms Configuration
  const WEB3FORMS_ACCESS_KEY = "7a538f0b-1046-4564-b673-806ca0e94836";

  const sendWeb3FormsEmail = async (formData) => {
    try {
      console.log('📧 Sending join request email via Web3Forms...');
      
      const web3FormData = new FormData();
      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", formData.phone || 'Not provided');
      web3FormData.append("reason", formData.reason);
      web3FormData.append("subject", `New Join Request from ${formData.name}`);
      web3FormData.append("from_name", "The Project Smile Website - Join Request");
      web3FormData.append("to_email", "muskanperween24@navgurukul.org");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Join request email sent successfully via Web3Forms');
        return { success: true };
      } else {
        console.error('❌ Web3Forms join request email sending failed:', result);
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
    setSubmitResult("Submitting your join request...");
    
    // Validate form
    if (!formData.name || !formData.email || !formData.reason) {
      setSubmitResult("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('📝 Submitting join request data:', formData);
      
      // Prepare data for Firebase (using same function as contact but with different structure)
      const joinRequestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Join Request - Reason: ${formData.reason}`,
        type: 'join_request'
      };
      
      // Save to Firebase first
      const firebaseResult = await saveContactForm(joinRequestData);
      
      if (firebaseResult.success) {
        console.log('✅ Join request data saved to Firebase');
        
        // Send email notification via Web3Forms
        const emailResult = await sendWeb3FormsEmail(formData);
        
        if (emailResult.success) {
          setSubmitResult("✅ Join request sent successfully! We will review your application and get back to you soon.");
          
          // Reset form after successful submission
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              reason: ''
            });
            setSubmitResult("");
          }, 4000);
          
        } else {
          setSubmitResult("✅ Join request saved! We received your application and will contact you soon.");
          console.log('Email may have failed but Firebase saved the data');
        }
      } else {
        setSubmitResult("❌ Failed to send join request. Please try again.");
        console.error('Firebase save failed:', firebaseResult.error);
      }
    } catch (error) {
      console.error('❌ Error submitting join request:', error);
      setSubmitResult("❌ Error sending join request. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="join-page">
      <div className="join-container">
        <div className="join-header">
          <h1>Join Our Mission</h1>
          <p>Become part of The Project Smile and help us make a difference in the world</p>
        </div>

        <div className="join-content">
          <div className="join-instructions">
            <h3>How to Join Us</h3>
            <div className="instruction-step">
              <span className="step-number">1</span>
              <p>Fill out the form with your complete details</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">2</span>
              <p>Tell us why you want to join our mission</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">3</span>
              <p>Our team will review your application</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">4</span>
              <p>We'll contact you for a brief interview</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">5</span>
              <p>Join us and start making a difference!</p>
            </div>
            <div className="instruction-step">
              <span className="step-number">6</span>
              <p>Begin your journey as a volunteer with us</p>
            </div>
          </div>

          <form className="join-form-section" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
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
              <label htmlFor="reason">Why do you want to join us?</label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Tell us why you want to join The Project Smile and how you'd like to contribute..."
                value={formData.reason}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="join-submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? '⏳' : '🤝'}</span> 
              {isSubmitting ? 'Submitting...' : 'Submit Join Request'}
            </button>
            
            {submitResult && (
              <div className={`submit-result ${submitResult.includes('✅') ? 'success' : 'error'}`}>
                {submitResult}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;