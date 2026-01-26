import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('online');
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

  // Real Razorpay payment function (use when you get actual keys)
  const handleRealPayment = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('❌ Payment gateway failed to load. Please try again.');
      setIsProcessing(false);
      return;
    }

    const options = {
      key: 'YOUR_ACTUAL_RAZORPAY_KEY_HERE', // Replace with real key
      amount: donationAmount * 100, // Amount in paise
      currency: 'INR',
      name: 'The Project Smile Foundation',
      description: `Donation for ₹${donationAmount}`,
      image: '/images/logo.jpg',
      handler: function(response) {
        console.log('✅ Real payment successful:', response);
        saveDonationRecord({
          ...donorInfo,
          amount: donationAmount,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString(),
          paymentMethod: 'Razorpay'
        });
        
        alert(`🎉 Thank you! Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
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
        message: donorInfo.message || 'Donation for The Project Smile',
        purpose: 'Charitable Donation'
      },
      theme: {
        color: '#4a90e2'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled by user');
          setIsProcessing(false);
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', function (response) {
      console.error('❌ Payment failed:', response.error);
      alert(`❌ Payment Failed!\nReason: ${response.error.description}\nPlease try again.`);
      setIsProcessing(false);
    });
    
    razorpay.open();
  };

  const handlePayment = async () => {
    // Validation
    if (!donationAmount || donationAmount < 1) {
      alert('❌ Please enter a valid donation amount (minimum ₹1)');
      return;
    }

    if (donationAmount < 10) {
      alert('❌ Minimum donation amount is ₹10');
      return;
    }

    if (!donorInfo.name.trim()) {
      alert('❌ Please enter your full name');
      return;
    }

    if (!donorInfo.email.trim() || !donorInfo.email.includes('@')) {
      alert('❌ Please enter a valid email address');
      return;
    }

    if (!donorInfo.phone.trim() || donorInfo.phone.length < 10) {
      alert('❌ Please enter a valid phone number');
      return;
    }

    setIsProcessing(true);

    // For demo purposes, let's create a working simulation
    // In production, you would use real Razorpay keys
    
    try {
      // Simulate payment processing
      console.log('🔄 Processing donation...');
      
      // Show processing message
      const processingMsg = `Processing your donation of ₹${donationAmount}...\nPlease wait...`;
      console.log(processingMsg);

      // Simulate payment delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate demo payment ID
      const demoPaymentId = `pay_demo_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
      
      // Simulate successful payment
      const paymentResponse = {
        razorpay_payment_id: demoPaymentId,
        status: 'success'
      };

      console.log('✅ Payment successful:', paymentResponse);
      
      // Process successful donation
      await saveDonationRecord({
        ...donorInfo,
        amount: donationAmount,
        paymentId: paymentResponse.razorpay_payment_id,
        timestamp: new Date().toISOString(),
        paymentMethod: 'Demo Mode'
      });

      // Success message
      alert(`🎉 Thank you for your donation!\n\nAmount: ₹${donationAmount}\nPayment ID: ${paymentResponse.razorpay_payment_id}\n\nYou will receive a receipt via email shortly.`);

      // Reset form
      setDonationAmount('');
      setDonorInfo({ name: '', email: '', phone: '', message: '' });
      setIsProcessing(false);

    } catch (error) {
      console.error('❌ Payment processing error:', error);
      alert('❌ Payment processing failed. Please try again or contact support.');
      setIsProcessing(false);
    }
  };

  const generateReceiptNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `TPS-${timestamp}-${random}`;
  };

  const saveDonationRecord = async (donationData) => {
    try {
      console.log('💰 Processing donation and generating receipt...');
      
      // Generate unique receipt number
      const receiptNumber = generateReceiptNumber();
      const receiptData = {
        ...donationData,
        receiptNumber,
        organizationName: 'The Project Smile Foundation',
        transactionDate: new Date().toLocaleString('en-IN'),
        status: 'Completed'
      };

      // Save to Firebase (using existing saveContactForm function)
      const { saveContactForm } = await import('../firebaseConfig');
      const firebaseResult = await saveContactForm({
        type: 'donation',
        ...receiptData,
        subject: `New Donation Received - ₹${donationData.amount}`
      });

      if (firebaseResult.success) {
        console.log('✅ Donation saved to Firebase');
        
        // Send receipt to donor
        await sendDonorReceipt(receiptData);
        
        // Send notification to owner
        await sendOwnerNotification(receiptData);
        
        console.log('✅ Receipt and notifications sent successfully');
      } else {
        console.error('❌ Failed to save donation to Firebase');
      }
      
    } catch (error) {
      console.error('❌ Error processing donation:', error);
    }
  };

  const sendDonorReceipt = async (receiptData) => {
    try {
      const WEB3FORMS_ACCESS_KEY = "7a538f0b-1046-4564-b673-806ca0e94836";
      
      const receiptHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #4a90e2; margin: 0;">THE PROJECT SMILE FOUNDATION</h2>
            <p style="margin: 5px 0;">Donation Receipt</p>
            <p style="margin: 5px 0; font-size: 14px; color: #666;">Receipt No: ${receiptData.receiptNumber}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Donation Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Donor Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.email}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.phone}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Amount:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>₹${receiptData.amount}</strong></td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Payment ID:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.paymentId}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Date & Time:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.transactionDate}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Status:</strong></td><td style="padding: 8px 0; color: #27ae60;"><strong>${receiptData.status}</strong></td></tr>
            </table>
          </div>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 14px; color: #2e7d32;">
              <strong>Tax Benefit:</strong> This donation is eligible for tax deduction under Section 80G of the Income Tax Act 1961. 
              (Approval No. CITE/80G/1004/2015-16 with effect from 17.07.2015)
            </p>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 14px;">
            <p>Thank you for supporting The Project Smile Foundation!</p>
            <p>For any queries, contact us at: info@theprojectsmile.org | +91 9876543210</p>
          </div>
        </div>
      `;

      const web3FormData = new FormData();
      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("subject", `Donation Receipt - ${receiptData.receiptNumber}`);
      web3FormData.append("from_name", "The Project Smile Foundation");
      web3FormData.append("to_email", receiptData.email);
      web3FormData.append("message", receiptHtml);
      web3FormData.append("content_type", "text/html");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const result = await response.json();
      if (result.success) {
        console.log('✅ Donor receipt sent successfully');
      }
    } catch (error) {
      console.error('❌ Error sending donor receipt:', error);
    }
  };

  const sendOwnerNotification = async (receiptData) => {
    try {
      const WEB3FORMS_ACCESS_KEY = "7a538f0b-1046-4564-b673-806ca0e94836";
      
      const notificationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #4a90e2; margin: 0;">NEW DONATION RECEIVED!</h2>
            <p style="margin: 5px 0; font-size: 18px; color: #27ae60;">₹${receiptData.amount}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Donor Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.email}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.phone}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Amount:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>₹${receiptData.amount}</strong></td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Payment ID:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.paymentId}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Receipt No:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.receiptNumber}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Date & Time:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${receiptData.transactionDate}</td></tr>
              ${receiptData.message ? `<tr><td style="padding: 8px 0;"><strong>Message:</strong></td><td style="padding: 8px 0;">${receiptData.message}</td></tr>` : ''}
            </table>
          </div>
          
          <div style="background: #e8f4f8; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #2c5aa0;">
              <strong>Action Required:</strong> Please log this donation in your records and send a formal 80G certificate if requested by the donor.
            </p>
          </div>
        </div>
      `;

      const web3FormData = new FormData();
      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("subject", `🎉 New Donation: ₹${receiptData.amount} - ${receiptData.name}`);
      web3FormData.append("from_name", "The Project Smile - Donation System");
      web3FormData.append("to_email", "muskanperween24@navgurukul.org"); // Owner's email
      web3FormData.append("message", notificationHtml);
      web3FormData.append("content_type", "text/html");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const result = await response.json();
      if (result.success) {
        console.log('✅ Owner notification sent successfully');
      }
    } catch (error) {
      console.error('❌ Error sending owner notification:', error);
    }
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        <div className="donate-header">
          <h1>Support Our Mission</h1>
          <p>Your contribution helps us make a positive impact in the community</p>
        </div>

        <div className="donation-tabs">
          <button 
            className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            💳 Online Transfer Now!
          </button>
        </div>

        <div className="donate-content">
          {activeTab === 'online' && (
            <div className="online-transfer-section">
              <div className="transfer-card">
                <div className="card-icon">🏦</div>
                <h3>Online Transfer <span className="now-text">Now!</span></h3>
                
                <div className="bank-details">
                  <div className="detail-row">
                    <span className="label">Name:</span>
                    <span className="value">THE PROJECT SMILE</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Bank:</span>
                    <span className="value">State Bank of India</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Account Number:</span>
                    <span className="value">44836421716</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Branch:</span>
                    <span className="value">Arrabari Kishanganj - 855117</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">IFSC Code:</span>
                    <span className="value">SBIN0061241</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Account Type:</span>
                    <span className="value">Savings Account</span>
                  </div>
                </div>
              </div>

              {/* QR Code Section moved here */}
              <div className="qr-section" style={{marginBottom: '2rem'}}>
                <h3>SIMPLY <span className="scan-text">SCAN AND DONATE</span></h3>
                <p>Digital Payment Method by QR code</p>
                <div className="qr-code-container">
                  <img src="public/images/qrcode (1).jpeg" alt="Donation QR Code" style={{width: '220px', height: '220px', objectFit: 'contain', margin: '0 auto', display: 'block'}} />
                  <p style={{textAlign: 'center'}}>SCAN & PAY WITH ANY UPI APP</p>
                  <div className="payment-apps" style={{textAlign: 'center'}}>
                    <span className="app-logo">GPay</span>
                    <span className="app-logo">PhonePe</span>
                    <span className="app-logo">Paytm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scan' && (
            <div className="scan-donation-section">
              <div className="scan-card">
                <div className="card-icon">📱</div>
                <h3>Make a Donation <span className="now-text">Now!</span></h3>
                <p className="donation-info-text">
                  Any donations made to The Project Smile Foundation are exempt u/s 80G subject to limits prescribed under the Income Tax Act 1961.
                  (Approval No. CITE/80G/1004/2015-16 with effect from 17.07.2015)
                </p>
              </div>

              <div className="qr-section">
                <h3>SIMPLY <span className="scan-text">SCAN AND DONATE</span></h3>
                <p>Powered by (NCPI) National Payments Corporation of India</p>
                
                <div className="qr-instructions">
                  <p>Open your BHIM UPI or any other UPI enabled APP</p>
                  <p>Select "Scan & Pay"</p>
                  <p>Scan QR code</p>
                  <p>Enter amount</p>
                  <p>Enter your PIN and Pay</p>
                </div>

                <div className="qr-code-container">
                  <div className="qr-code">
                    <div className="qr-placeholder">
                      <div className="qr-grid">
                        {/* QR Code Pattern */}
                        {Array.from({length: 25}).map((_, i) => (
                          <div key={i} className={`qr-dot ${Math.random() > 0.5 ? 'filled' : ''}`}></div>
                        ))}
                      </div>
                    </div>
                    <p>SCAN & PAY WITH ANY UPI APP</p>
                    <div className="payment-apps">
                      <span className="app-logo">GPay</span>
                      <span className="app-logo">PhonePe</span>
                      <span className="app-logo">Paytm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="receipt-info">
                <p>To get a donation receipt kindly mail us transaction details at <strong>info@theprojectsmile.org</strong> or WhatsApp / SMS on <strong>9876543210</strong></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;