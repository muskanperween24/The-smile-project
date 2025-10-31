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
          <button
            className="btn volunteer"
            onClick={() =>
              document.querySelector("#contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Volunteer Now
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
                icon: "📘",
                title: "Education Support",
                desc: "We help students after Class 5 with extra study and doubt-clearing support to continue learning confidently.",
              },
              {
                icon: "💬",
                title: "English Learning Classes",
                desc: "We teach English in a fun and easy way — focusing on speaking, listening, and writing skills.",
              },
              {
                icon: "🎨",
                title: "Extra-Curricular Activities",
                desc: "Drawing, storytelling, and games that build creativity and confidence in children.",
              },
              {
                icon: "🧑‍🏫",
                title: "Mentorship & Guidance",
                desc: "We help students set goals, stay motivated, and take small steps toward big results.",
              },
              {
                icon: "📊",
                title: "Success Tracking",
                desc: "We track students’ progress and share their success stories to inspire others.",
              },
              {
               icon: "🗳️",
               title: "Political Awareness",
               desc: "Logon ko sahi aur imandaar politics ke baare me jagruk banana.",
               },
              {
                icon: "🎓",
                title: "Educational Institutions",
                 desc: "School, College, aur University jaise educational centers chalana.",
              },
             {
                 icon: "🧠",
                 title: "Social Awareness Programs",
                 desc: "Samajik, shiksha aur dharmik awareness badhana.",
               },
               {
                 icon: "🚑",
                 title: "Disaster Relief & Management",
                 desc: "Natural disaster ke time relief aur recovery ka kaam karna.",
               },
               
            ].map((p, i) => (
              <article key={i} className="program-card">
                <div className="icon">{p.icon}</div>
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
