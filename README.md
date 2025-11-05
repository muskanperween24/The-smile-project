# 🌟 The Project Smile

> *"Bringing smiles to the lives of underprivileged children and communities through education, empowerment, and empathy — one smile at a time."*

**The Project Smile** is a non-profit organization website that works to create positive social change and improve the lives of underprivileged children, women, and families through various community development programs.

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 About

**The Project Smile Trust** is a registered non-profit organization under the Indian Trust Act, 1882, officially registered at the Sub Registry Office, Thakurganj, Bihar on July 12, 2024. Founded by **Md. Mehruddin**, our mission is to:

- 📚 Provide education support to dropout students
- 👩‍💼 Empower women through skill development
- 🏥 Organize health camps and medical awareness
- 🌱 Promote environmental conservation
- 🤝 Support community development initiatives

## ✨ Features

### 🎨 **Modern UI/UX**
- Responsive design that works on all devices
- Clean and professional interface
- Smooth animations and transitions
- Green theme consistent with organization branding

### 📱 **Key Functionalities**
- **Dynamic Image Slider** - Showcase programs with auto-rotating backgrounds
- **Team Profiles** - Interactive team member cards with detailed modals
- **Contact Forms** - Web3Forms integration for seamless communication
- **Donation System** - Multiple payment options (Online Transfer & QR Code)
- **Success Stories** - Highlighting real impact through testimonials
- **News & Updates** - Latest organizational activities and achievements

### 🚀 **Performance Optimized**
- Fast loading times with optimized images
- Clean code structure with reusable components
- SEO-friendly structure
- Mobile-first responsive design

## 🛠️ Tech Stack

### **Frontend**
- **React.js** - Component-based UI library
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

### **Backend & Services**
- **Web3Forms** - Contact form handling
- **Firebase** - Database for form submissions (configured)
- **Git** - Version control

### **Deployment & Development**
- **GitHub** - Code repository and collaboration
- **Vite Dev Server** - Development environment
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/muskanperween24/The-smile-project.git
   cd The-smile-project/latest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   touch .env
   
   # Add your configuration
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
   VITE_FIREBASE_API_KEY=your_firebase_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**
```bash
npm run build
npm run preview  # Preview production build
```

## 📁 Project Structure

```
The-smile-project/
├── latest/
│   ├── public/
│   │   ├── images/           # Static images
│   │   └── icons/           # Favicon and icons
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Home.jsx/css       # Landing page
│   │   │   ├── About.jsx/css      # About us page
│   │   │   ├── Program.jsx/css    # Programs showcase
│   │   │   ├── Team.jsx/css       # Team members
│   │   │   ├── Contact.jsx/css    # Contact form
│   │   │   ├── Donate.jsx/css     # Donation page
│   │   │   ├── Join.jsx/css       # Volunteer signup
│   │   │   ├── LearnMore.jsx/css  # Detailed information
│   │   │   ├── Navbar.jsx/css     # Navigation
│   │   │   └── Footer.jsx/css     # Footer component
│   │   ├── assets/          # Static assets
│   │   ├── firebaseConfig.js # Firebase configuration
│   │   └── main.jsx         # App entry point
│   ├── package.json         # Dependencies and scripts
│   ├── vite.config.js       # Vite configuration
│   └── eslint.config.js     # ESLint rules
└── README.md                # This file
```

## 📄 Pages Overview

### 🏠 **Home** (`/`)
- Hero slider with program highlights
- Quick stats and impact numbers
- Featured success stories
- Latest news and updates
- Programs overview grid

### ℹ️ **About** (`/about`)
- Organization history and mission
- Founder information
- Approach and methodology
- Core values and principles

### 📚 **Programs** (`/programs`)
- Detailed program descriptions
- Education support initiatives
- Skill development programs
- Community outreach activities

### 👥 **Team** (`/team`)
- Leadership team profiles
- Advisory board members
- Interactive member modals with detailed information

### 📞 **Contact** (`/contact`)
- Contact form with Web3Forms integration
- Office location and details
- Social media links
- FAQ section

### 💰 **Donate** (`/donate`)
- Online transfer details
- QR code for mobile payments
- Impact calculator
- Donation tracking

### 🤝 **Join Us** (`/join`)
- Volunteer application form
- Step-by-step joining process
- Available volunteer positions
- Requirements and benefits

### 📖 **Learn More** (`/learn-more`)
- Detailed organizational information
- Vision and mission statements
- Program deep-dives
- Impact stories and testimonials

## 🎨 Color Scheme & Branding

### **Primary Colors**
- **Primary Green**: `#059669` - Main brand color
- **Light Green**: `#10b981` - Secondary elements
- **Dark Green**: `#047857` - Text and emphasis
- **Accent Green**: `#34d399` - Highlights and gradients

### **Typography**
- **Primary**: Poppins, Montserrat (Headers)
- **Secondary**: Inter, Segoe UI (Body text)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically

# Deployment
npm run deploy       # Deploy to hosting platform
```

## 🌟 Key Features Implementation

### **Responsive Design**
```css
/* Mobile-first approach */
@media (max-width: 768px) {
  /* Mobile styles */
}
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

### **Form Integration**
- **Web3Forms** for contact and join forms
- **Firebase** backup storage
- Real-time form validation
- Success/error feedback

### **Image Optimization**
- Compressed images for faster loading
- WebP format support
- Lazy loading implementation
- Responsive image sizing

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Development Process**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### **Coding Standards**
- Follow ESLint configuration
- Use semantic HTML
- Maintain consistent indentation (2 spaces)
- Add comments for complex logic
- Follow React best practices

### **Areas for Contribution**
- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 📱 Mobile responsiveness
- ⚡ Performance optimizations
- 🌐 Accessibility improvements
- 📚 Documentation updates

## 📞 Contact & Support

### **Organization Contact**
- **Email**: muskanperween24@navgurukul.org
- **Phone**: +91-XXXXXXXXXX
- **Address**: Thakurganj, Bihar, India

### **Development Team**
- **Lead Developer**: [Your Name]
- **Project Repository**: [GitHub Repository](https://github.com/muskanperween24/The-smile-project)
- **Issues & Bug Reports**: [GitHub Issues](https://github.com/muskanperween24/The-smile-project/issues)

### **Social Media**
- 🌐 Website: [Coming Soon]
- 📘 Facebook: [Link]
- 📸 Instagram: [Link]
- 🐦 Twitter: [Link]

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Founder**: Md. Mehruddin - For vision and leadership
- **Development Team** - For technical implementation
- **Community Members** - For feedback and support
- **Volunteers** - For their dedication and service
- **Open Source Community** - For the amazing tools and libraries

---

### 💡 **"Every smile has a story. Behind every smile is a child who dreams of becoming a teacher, a doctor, or a change-maker."**

**Made with ❤️ by The Project Smile Team**

---

*Last Updated: November 2025*
