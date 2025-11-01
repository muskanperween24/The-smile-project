import React, { useState } from "react";
import "./Program.css";

const Program = () => {
  const [showForm, setShowForm] = useState(false);

  const openJoinForm = () => setShowForm(!showForm);

  return (
    <div className="programs-page">
      {/* 🌈 Header */}
      <header className="header">
        <h1>Our Programs</h1>

        <div className="btn-group">
          <button className="btn join" onClick={openJoinForm}>
            Join Our Program
          </button>
        </div>

        {showForm && (
          <div className="join-form">
            <h3>Join Our Program</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />

              <label>Interest:</label>
              <select>
                <option>Teaching</option>
                <option>Mentorship</option>
                <option>Donation</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </header>

      {/* 📚 Programs Section */}
      <main className="main-section">
        <section id="programs">
          <div className="section-title">
            <h2>Programs We Run</h2>
            <span>For children (Class 5+)</span>
          </div>

          <div className="program-grid">
            {[
              {
                icon: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=200&h=200&fit=crop&crop=center",
                title: "Education Support",
                desc: "We help students after Class 5 with extra study and doubt-clearing support to continue learning confidently.",
              },
              {
                icon: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop&crop=center",
                title: "English Learning Classes",
                desc: "We teach English in a fun and easy way — focusing on speaking, listening, and writing skills.",
              },
              {
                icon: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&crop=center",
                title: "Extra-Curricular Activities",
                desc: "Drawing, storytelling, and games that build creativity and confidence in children.",
              },
              {
                icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center",
                title: "Mentorship & Guidance",
                desc: "We help students set goals, stay motivated, and take small steps toward big results.",
              },
              {
                icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center",
                title: "Success Tracking",
                desc: "We track students' progress and share their success stories to inspire others.",
              },
              {
               icon: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&h=200&fit=crop&crop=center",
               title: "Political Awareness",
               desc: "Logon ko sahi aur imandaar politics ke baare me jagruk banana.",
               },
              {
                icon: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop&crop=center",
                title: "Educational Institutions",
                 desc: "School, College, aur University jaise educational centers chalana.",
              },
             {
                 icon: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop&crop=center",
                 title: "Social Awareness Programs",
                 desc: "Samajik, shiksha aur dharmik awareness badhana.",
               },
               {
                 icon: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=200&h=200&fit=crop&crop=center",
                 title: "Disaster Relief & Management",
                 desc: "Natural disaster ke time relief aur recovery ka kaam karna.",
               },
               
            ].map((p, i) => (
              <article key={i} className="program-card">
                <div className="icon">
                  <img src={p.icon} alt={p.title} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>


        
      </main>
    </div>
  );
};

export default Program;
