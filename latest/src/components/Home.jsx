import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider images data
  const sliderImages = [
    {
      image: '/images/pexels-bri-schneiter-28802-346529.jpg',
      title: 'Inclusive development practices',
      description: 'Empowering communities through education and sustainable development'
    },
    {
      image: '/images/pexels-francesco-ungaro-3027422.jpg', 
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children'
    },
    {
      image: '/images/pexels-julien-goettelmann-44396125-19453552.jpg',
      title: 'Healthcare & Wellness',
      description: 'Bringing essential healthcare services to rural communities'
    },
    {
      image: '/images/pexels-raulling-29304914.jpg',
      title: 'Women Empowerment',
      description: 'Supporting women through skill development and entrepreneurship'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="home">
      {/* Hero Section with Image Slider */}
      <div className="hero-section">
        <div className="slider-container">
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}
          
          {/* Slider Navigation */}
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ❯
          </button>

          {/* Slider Dots */}
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="smile-text">SMILE</div>
          <div className="tagline">
            {sliderImages[currentSlide].title}
          </div>
          <p className="hero-description">
            {sliderImages[currentSlide].description}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Donate Now</button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <h2>About The Project Smile Trust</h2>
          <div className="mission-text">
            The Project Smile Trust is a registered non-profit organization under the Indian Trust Act, 1882. 
            It was officially registered at the Sub Registry Office, Thakurganj, Bihar on 12 July 2024.
            <br /><br />
            Our Trust was founded by Md. Mehruddin with a mission to create positive social change and 
            improve the lives of underprivileged children and families.
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="stats-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Educated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20</div>
              <div className="stat-label">Villages Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50</div>
              <div className="stat-label">Volunteers Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Lives Touched</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories / Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="/images/IMG-20240915-WA0106.jpg" alt="Success Story" />
              </div>
              <div className="testimonial-content">
                <h3>Community Impact</h3>
                <p>"Through The Project Smile's education program, I completed my studies and now I'm a teacher in my village. I'm helping other children achieve their dreams too."</p>
                <div className="testimonial-author">
                  <strong>- Priya Sharma, Village Teacher</strong>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="/images/success-story-2.jpg" alt="Ravi's Success Story" />
              </div>
              <div className="testimonial-content">
                <h3>Ravi's Transformation</h3>
                <p>"The skill development program changed my life. I learned tailoring and now I have my own shop. My family is financially stable and my children go to school."</p>
                <div className="testimonial-author">
                  <strong>- Ravi Kumar, Entrepreneur</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Programs Section */}
      <div id="programs" className="programs-section">
        <div className="container">
          <h2>Our Programs & Work</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="/images/pexels-francesco-ungaro-3027422.jpg" alt="Education Program" />
              </div>
              <div className="program-content">
                <div className="program-icon">📚</div>
                <h3>Education</h3>
                <p>Providing quality education and learning resources to underprivileged children in rural and urban areas. We run schools, libraries, and skill development programs.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/pexels-julien-goettelmann-44396125-19453552.jpg" alt="Health Program" />
              </div>
              <div className="program-content">
                <div className="program-icon">🏥</div>
                <h3>Health</h3>
                <p>Organizing free medical camps, health awareness programs, and providing essential healthcare services to communities in need.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/women-empowerment.jpg" alt="Women Empowerment" />
              </div>
              <div className="program-content">
                <div className="program-icon">👩</div>
                <h3>Women Empowerment</h3>
                <p>Empowering women through skill development, entrepreneurship training, and creating sustainable livelihood opportunities.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/environment.jpg" alt="Environment Program" />
              </div>
              <div className="program-content">
                <div className="program-icon">🌱</div>
                <h3>Environment</h3>
                <p>Environmental conservation through tree plantation drives, waste management programs, and promoting sustainable practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div id="get-involved" className="get-involved-section">
        <div className="container">
          <h2>Get Involved</h2>
          <p>Join us in making a difference. There are many ways you can contribute to our mission.</p>
          <div className="involvement-grid">
            <div className="involvement-card">
              <div className="involvement-icon">🙋‍♀️</div>
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers and directly impact lives in your community.</p>
              <button className="btn-primary">Become a Volunteer</button>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon">❤️</div>
              <h3>Donate</h3>
              <p>Your generous donations help us continue our work and reach more people in need.</p>
              <button className="btn-secondary">Make a Donation</button>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon">🤝</div>
              <h3>Partner</h3>
              <p>Partner with us to create sustainable change and expand our reach in communities.</p>
              <button className="btn-primary">Partner With Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="news-section">
        <div className="container">
          <h2>Latest News & Updates</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <img src="/images/news-1.jpg" alt="Annual Education Drive" />
              </div>
              <div className="news-content">
                <div className="news-date">October 15, 2024</div>
                <h3>Annual Education Drive 2024</h3>
                <p>Successfully distributed books and school supplies to 200+ children across 5 villages in our annual education drive.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="/images/news-2.jpg" alt="Health Camp Success" />
              </div>
              <div className="news-content">
                <div className="news-date">September 28, 2024</div>
                <h3>Free Health Camp Success</h3>
                <p>Our recent health camp provided free medical checkups and medicines to over 300 families in rural areas.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="/images/news-3.jpg" alt="Women Empowerment Workshop" />
              </div>
              <div className="news-content">
                <div className="news-date">September 10, 2024</div>
                <h3>Women Empowerment Workshop</h3>
                <p>Completed a successful 3-day skill development workshop for 50 women, focusing on entrepreneurship and financial literacy.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home