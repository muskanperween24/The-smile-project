import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!donationAmount || donationAmount < 1) {
      alert('Please enter a valid donation amount');
      return;
    }

    if (!donorInfo.name || !donorInfo.email || !donorInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Payment gateway failed to load. Please try again.');
      setIsProcessing(false);
      return;
    }

    const options = {
      key: 'rzp_test_9999999999', // Replace with your actual Razorpay key
      amount: donationAmount * 100, // Amount in paise
      currency: 'INR',
      name: 'The Project Smile',
      description: 'Donation for a better tomorrow',
      image: '/logo.jpg', // Add your organization logo
      handler: function(response) {
        // Payment successful
        alert(`Thank you for your donation! Payment ID: ${response.razorpay_payment_id}`);
        console.log('Payment successful:', response);
        
        // Here you can send the payment details to your backend
        saveDonationRecord({
          ...donorInfo,
          amount: donationAmount,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString()
        });

        // Reset form
        setDonationAmount('');
        setDonorInfo({ name: '', email: '', phone: '', message: '' });
        setIsProcessing(false);
      },
      prefill: {
        name: donorInfo.name,
        email: donorInfo.email,
        contact: donorInfo.phone
      },
      notes: {
        message: donorInfo.message || 'Donation for The Project Smile'
      },
      theme: {
        color: '#4a90e2'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const saveDonationRecord = async (donationData) => {
    try {
      // Here you would typically save to your Firebase or backend
      console.log('Saving donation record:', donationData);
      
      // Example: Save to Firebase (you can implement this similar to your contact form)
      // await saveDonationToFirebase(donationData);
      
      // Send confirmation email (optional)
      // await sendDonationConfirmationEmail(donationData);
      
    } catch (error) {
      console.error('Error saving donation record:', error);
    }
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        <div className="donate-header">
          <h1>Make a Difference Today</h1>
          <p>Your donation helps us bring smiles to those who need it most</p>
        </div>

        <div className="donate-content">
          <div className="donation-info">
            <h3>Why Your Donation Matters</h3>
            <div className="impact-item">
              <div className="impact-icon">📚</div>
              <div className="impact-text">
                <h4>Education Support</h4>
                <p>₹500 can provide school supplies for one child for a month</p>
              </div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🍽️</div>
              <div className="impact-text">
                <h4>Nutrition Program</h4>
                <p>₹1000 can feed a family of 4 for a week</p>
              </div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🏥</div>
              <div className="impact-text">
                <h4>Healthcare Access</h4>
                <p>₹2000 can cover basic medical treatment for one person</p>
              </div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🏠</div>
              <div className="impact-text">
                <h4>Shelter Support</h4>
                <p>₹5000 can help provide temporary shelter for a family</p>
              </div>
            </div>
          </div>

          <div className="donation-form">
            <h3>Donate Now</h3>
            
            <div className="amount-section">
              <label>Select Donation Amount</label>
              <div className="predefined-amounts">
                {predefinedAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`amount-btn ${donationAmount == amount ? 'selected' : ''}`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="custom-amount">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  min="1"
                />
              </div>
            </div>

            <div className="donor-info">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  value={donorInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={donorInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={donorInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share why you want to support our mission..."
                  value={donorInfo.message}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button 
              className="donate-submit-btn"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="spinner">⏳</span> Processing...
                </>
              ) : (
                <>
                  <span>💝</span> Donate ₹{donationAmount || 0}
                </>
              )}
            </button>

            <div className="payment-security">
              <p>🔒 Secure payment powered by Razorpay</p>
              <p>💳 We accept UPI, Cards, Net Banking & Wallets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;