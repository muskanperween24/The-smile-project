import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'muskanperween24@navgurukul.org',
    pass: process.env.EMAIL_PASS || 'your-app-password' // Gmail App Password required
  }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  console.log('📧 Email request received:', { name, email, phone });

  const mailOptions = {
    from: process.env.EMAIL_USER || 'muskanperween24@navgurukul.org',
    to: 'muskanperween24@navgurukul.org',
    subject: `🔔 New Contact Form Submission - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4a90e2; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📱 Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">💬 Message:</h3>
          <p style="line-height: 1.6; color: #555;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            <strong>📧 Reply to:</strong> ${email}<br>
            <strong>⏰ Received:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #888; text-align: center;">
          This email was sent from The Project Smile contact form.
        </p>
      </div>
    `,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      message: 'Failed to send email' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`📧 Email server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});