import React, { useState } from "react";
import "./Program.css";

const Program = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 program-container">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 program-nav">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center nav-logo">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">SMILE PROJECT</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition duration-300">Home</a>
              <a href="#programs" className="text-gray-600 hover:text-green-600 transition duration-300">Programs</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition duration-300">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition duration-300">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section with Join Form */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 program-header">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight program-title">
                Transform Lives Through Education
              </h1>
              <p className="text-xl mb-8 text-green-100 program-subtitle">
                Join our mission to provide quality education and opportunities to underprivileged children. Together, we can build a brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 program-buttons">
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition duration-300">
                  Watch Video
                </button>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 program-form">
              <h3 className="text-2xl font-bold mb-6">Join Our Program</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
                >
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-20 bg-white programs-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive educational programs designed to empower children and communities with the knowledge and skills they need to succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 program-card">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 program-icon">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Primary Education</h3>
              <p className="text-gray-600 mb-6">
                Foundational learning programs for children aged 5-12, focusing on literacy, numeracy, and critical thinking skills.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 program-button">
                Learn More
              </button>
            </div>

            {/* Program 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 program-card">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 program-icon">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital Literacy</h3>
              <p className="text-gray-600 mb-6">
                Technology education programs that prepare students for the digital age with computer skills and coding basics.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 program-button">
                Learn More
              </button>
            </div>

            {/* Program 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 program-card">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 program-icon">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Creative Arts</h3>
              <p className="text-gray-600 mb-6">
                Arts and crafts programs that foster creativity, self-expression, and cultural appreciation among children.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 program-button">
                Learn More
              </button>
            </div>

            {/* Program 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 program-card">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 program-icon">
                <span className="text-white text-2xl">🏃</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sports & Recreation</h3>
              <p className="text-gray-600 mb-6">
                Physical education and sports programs that promote health, teamwork, and leadership skills.
              </p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 program-button">
                Learn More
              </button>
            </div>

            {/* Program 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 program-card">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 program-icon">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Life Skills</h3>
              <p className="text-gray-600 mb-6">
                Essential life skills training including financial literacy, communication, and personal development.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300 program-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Story Section */}
      <div className="py-20 bg-gray-50 success-story">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Success Stories</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg success-card">
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Success Story"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Priya Sharma</h4>
                    <p className="text-gray-600">Program Graduate</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The Smile Project changed my life completely. Through their education program, I learned not just academics but also gained confidence to pursue my dreams. Today, I'm working as a software developer and giving back to my community."
                </p>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            
            <div className="relative success-image">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="Children Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-70% rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Empowering Through Education</h3>
                <p className="text-lg">Join us in creating more success stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white contact-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can help us make a difference in children's lives. Choose how you'd like to contribute.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center contact-card">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 contact-icon">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Volunteer With Us</h3>
              <p className="mb-6 text-green-100">
                Share your skills and time to directly impact children's lives. We welcome volunteers from all backgrounds.
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 contact-button">
                Become a Volunteer
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center contact-card">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 contact-icon">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
              <p className="mb-6 text-blue-100">
                Your financial support helps us provide educational materials, meals, and resources to children in need.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 contact-button">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
