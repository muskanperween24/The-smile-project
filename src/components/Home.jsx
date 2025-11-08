import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// Import images
import bg1 from '/images/background picture 1.jpeg'
import bg2 from '/images/background 1 home.jpg'
import bg3 from '/images/background picture 2.avif'
import bg4 from '/images/background picture 3.jpg'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullStory1, setShowFullStory1] = useState(false);
  const [showFullStory2, setShowFullStory2] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(0);

  // Slider images data
  const sliderImages = [
    {
      image: bg1,
      title: 'Inclusive development practices',
      description: 'Empowering communities through education and sustainable development'
    },
    {
      image: bg2,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children'
    },
    {
      image: bg3,
      title: 'Healthcare & Wellness',
      description: 'Bringing essential healthcare services to rural communities'
    },
    {
      image: bg4,
      title: 'Women Empowerment',
      description: 'Supporting women through skill development and entrepreneurship'
    }
  ];

  // Programs data
  const programsData = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3002/3002543.png',
      title: 'Education Support',
      description: 'We help students after Class 5 with extra study and doubt-clearing support to continue learning confidently.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2956/2956172.png',
      title: 'English Learning Classes',
      description: 'We teach English in a fun and easy way — focusing on speaking, listening, and writing skills.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2942/2942813.png',
      title: 'Extra-Curricular Activities',
      description: 'Drawing, storytelling, and games that build creativity and confidence in children.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
      title: 'Health & Wellness',
      description: 'Organizing free medical camps, health awareness programs, and essential healthcare services.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/9408/9408201.png',
      title: 'Women Empowerment',
      description: 'Empowering women through skill development, entrepreneurship training, and livelihood opportunities.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/628/628283.png',
      title: 'Environment Care',
      description: 'Environmental conservation through tree plantation drives and sustainable practices.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1973/1973800.png',
      title: 'Community Development',
      description: 'Building stronger communities through social awareness and development programs.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135692.png',
      title: 'Skill Development',
      description: 'Training programs for youth to develop technical and vocational skills for employment.'
    },
    {
      icon: '🎯',
      title: 'Youth Programs',
      description: 'Leadership development and career guidance programs for young people.'
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
          <div className="hero-smile-container">
            <div className="custom-smile-text">
              <span className="smile-emoji">😊</span>
              <span className="smile-text">Smile</span>
              <span className="smile-emoji">😊</span>
            </div>
          </div>
          <p className="tagline">Spreading joy and making a difference, one smile at a time</p>
          <div className="hero-buttons">
            <Link to="/learn-more" className="btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <h2>About The Project Smile</h2>
          <div className="mission-text">
            The Project Smile Trust is a registered non-profit organization under the Indian Trust Act, 1882.
            It was officially registered at the Sub Registry Office, Thakurganj, Bihar on 12 July 2024.
            <br /><br />
            Our Trust was founded by Md. Mehruddin with a mission to create positive social change and
            improve the lives of underprivileged children and families. We believe that every child deserves
            access to quality education, healthcare, and opportunities for growth.
            {/* <br /><br />
            Through our dedicated programs, we work tirelessly to bridge the gap between privilege and need. 
            Our initiatives span across education support, skill development, healthcare awareness, and 
            community empowerment. We collaborate with local communities, volunteers, and partners to 
            create sustainable solutions that address the root causes of poverty and inequality. */}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="stats-section">
        <div className="container">
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
          
          {/* Story 1 - Banita */}
          <div className="success-story-card">
            <div className="story-image">
              <img src="/images/SUCCESS STOYRY.jpeg" alt="Banita's Success Story" />
            </div>
            <div className="story-content">
              <h3>Community Impact</h3>
              <div className="story-text">
                <p>
                  {showFullStory1 ? (
                    <>
                      ✨ <strong>A Step Toward New Hope – The Story of Banita</strong> ✨
                      <br /><br />
                      Banita Ravidas, an innocent little girl with dreams sparkling in her eyes and a heart full of determination to achieve something in life. She is a regular student at Dr. Bhimrao Ambedkar Pathshala, run by The Project Smile organization. Unfortunately, Banita's mother is no longer in this world, but the organization has ensured that her dreams continue to live on.
                      <br /><br />
                      On 28th July 2025, the President of the organization visited the school and personally gifted Banita her first book — "Akshar Gyaan" (The Knowledge of Letters). This is not just a book, but the first step toward her bright future. Through this small effort, a ray of hope could be seen in Banita's eyes — the belief that she too can learn, grow, and move forward in life.
                      <br /><br />
                      We firmly believe that every child, no matter their circumstances, deserves education and dignity. The mission of The Project Smile is to provide opportunities and support to such children, empowering them to become self-reliant and confident individuals.
                      <br /><br />
                      🙏 We invite you all to join us in this mission and help brighten the future of many more girls like Banita. Please follow our organization's page and share it with others — your support will help us reach more people and spread our message of hope.
                    </>
                  ) : (
                    <>
                      ✨ <strong>A Step Toward New Hope – The Story of Banita</strong> ✨
                      <br /><br />
                      Banita Ravidas, an innocent little girl with dreams sparkling in her eyes and a heart full of determination to achieve something in life...
                    </>
                  )}
                </p>
              </div>
              <button
                className="read-more-btn"
                onClick={() => setShowFullStory1(!showFullStory1)}
              >
                {showFullStory1 ? 'Read Less' : 'Read More'}
              </button>
              <div className="story-author">
                <strong>— Banita</strong>
              </div>
            </div>
          </div>

          {/* Story 2 - Sulema & Sagori */}
          <div className="success-story-card reverse">
            <div className="story-image">
              <img src="/images/2ND SUCCESS STOYR 2.jpeg" alt="Sulema & Sagori's Success Story" />
            </div>
            <div className="story-content">
              <h3>Skills Development Success</h3>
              <div className="story-text">
                <p>
                  {showFullStory2 ? (
                    <>
                      <strong>I want to share a short story</strong> —
                      <br /><br />
                      Salema Khatun and Sagori Khatun, two 13-year-old girls, used to live in a small hut. After their mother passed away, they had to drop out of school.
                      <br /><br />
                      Our team reached out to them and enrolled them in the Project Smile Learning Centre. Today, both Salema and Sagori are studying in class seven.
                      <br /><br />
                      When they smile and say, "Now I will become a teacher," — that very moment becomes our greatest success.
                    </>
                  ) : (
                    <>
                      <strong>I want to share a short story</strong> — Salema Khatun and Sagori Khatun, two 13-year-old girls, used to live in a small hut...
                    </>
                  )}
                </p>
              </div>
              <button
                className="read-more-btn"
                onClick={() => setShowFullStory2(!showFullStory2)}
              >
                {showFullStory2 ? 'Read Less' : 'Read More'}
              </button>
              <div className="story-author">
                <strong>— Sulema Khatoon & Sagori Khatoon</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Programs Section - Gallery Slider */}
      <div id="programs" className="programs-section">
        <div className="programs-full-width">
          <h2>Our Programs & Work</h2>
          <div className="programs-slider">
            <div className="programs-container" style={{ transform: `translateX(-${currentProgram * (100 / 3)}%)` }}>
              {programsData.map((program, index) => (
                <div key={index} className="program-slide">
                  <div className="program-card-modern">
                    <div className="program-icon-large">
                      <img src={program.icon} alt={program.title} className="program-icon-image" />
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <Link to="/programs" className="know-more-btn">Know More →</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Program Slider Navigation */}
            <button
              className="program-slider-btn prev-btn"
              onClick={() => setCurrentProgram(currentProgram > 0 ? currentProgram - 1 : Math.max(0, programsData.length - 5))}
            >
              ❮
            </button>
            <button
              className="program-slider-btn next-btn"
              onClick={() => setCurrentProgram(currentProgram < programsData.length - 5 ? currentProgram + 1 : 0)}
            >
              ❯
            </button>
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
                <img src="/images/News picture.jpeg" alt="Annual Education Drive" />
              </div>
              <div className="news-content">
                <div className="news-date">October 15, 2024</div>
                <h3>Annual Education Drive 2024</h3>
                <p>Successfully distributed books and school supplies to 200+ children across 5 villages in our annual education drive.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="/images/SUCCESS STOYRY.jpeg" alt="Health Camp Success" />
              </div>
              <div className="news-content">
                <div className="news-date">September 28, 2024</div>
                <h3>Free Health Camp Success</h3>
                <p>Our recent health camp provided free medical checkups and medicines to over 300 families in rural areas.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="/images/2ND SUCCESS STOYR 2.jpeg" alt="Women Empowerment Workshop" />
              </div>
              <div className="news-content">
                <div className="news-date">September 10, 2024</div>
                <h3>Women Empowerment Workshop</h3>
                <p>Completed a successful 3-day skill development workshop for 50 women, focusing on entrepreneurship and financial literacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home