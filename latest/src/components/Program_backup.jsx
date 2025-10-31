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
                desc: "We help students after Class 5 with extra study and doubt-clearing support to continue learning confidently."
              },
              {
                icon: "�‍🎓",
                title: "Women & Girl Empowerment",
                desc: "We believe that when a girl is educated, the whole family grows stronger. Our trust provides awareness programs about girls' education and equal rights. We organize skill-based training like stitching, handicraft, and digital literacy for women. Workshops and counselling sessions help girls understand their self-worth. We motivate parents to send their daughters to school without fear or hesitation. Vocational training helps women become financially independent and confident. We also support women in rural areas to start small businesses for livelihood. Our volunteers conduct awareness drives against early marriage and gender discrimination. We celebrate successful women as role models to inspire others. Through these efforts, we aim to create a society where every girl stands tall with pride."
              },
              {
                icon: "❤️",
                title: "Health & Medical Care",
                desc: "Good health is the foundation of a happy life. We organize health check-up camps in villages and slum areas for free. Doctors and nurses volunteer to provide medical advice and treatment to poor families. Our awareness drives teach people about hygiene, nutrition, and vaccination. We distribute medicines and health kits to those who cannot afford them. Women and children get special care during our medical awareness sessions. During emergencies, we provide ambulance and first aid support. We also help people connect with government hospitals for proper treatment. Through our efforts, many rural families have improved their lifestyle and health. Our mission is to make health a right, not a privilege."
              },
              {
                icon: "�",
                title: "Old Age & Orphan Care",
                desc: "We take care of orphans and elderly people who have no one to look after them. Our centers provide food, clothes, and shelter to those in need. We organize fun and emotional activities so they feel loved and respected. Elders are treated like family, and children are given proper education and guidance. Our volunteers visit them regularly and spend time listening to their stories. We celebrate festivals together to make them feel happy and included. Orphan children receive educational support and emotional care. We also encourage community members to adopt or sponsor a child's education. Our goal is to ensure that no one feels lonely or forgotten. Through care and compassion, we bring smiles to faces that once felt hopeless."
              },
              {
                icon: "�",
                title: "Youth Skill Development",
                desc: "We run special training programs to help young people build skills for a better future. Workshops on communication, computer literacy, and leadership are regularly organized. Our sports training, like Kung-Fu and Taekwondo, boosts confidence and discipline. We guide youths in finding job opportunities and preparing for interviews. Career counselling sessions help them identify their strengths and goals. Skill-based learning programs make them employable and independent. We invite professionals to motivate and mentor rural youth. Entrepreneurship training helps them start small local businesses. Our aim is to reduce unemployment and empower young minds. Through skill and confidence, we shape the leaders of tomorrow."
              },
              {
                icon: "🧠",
                title: "Social Awareness",
                desc: "Awareness is the first step toward change. We conduct programs about education, politics, health, and human rights. Villagers and youth are encouraged to participate in open discussions. Our campaigns help people understand their duties and responsibilities as citizens. We promote unity, equality, and peace among different communities. Workshops on women's rights and child protection spread social understanding. We also conduct awareness about environmental cleanliness and waste reduction. Volunteers use street plays, posters, and rallies to reach more people. Social awareness builds strong, informed, and responsible citizens. We believe an aware society is a strong society."
              },
              {
                icon: "⚖️",
                title: "Legal & Human Rights Aid",
                desc: "Justice should not depend on money. We help poor prisoners and innocent people who cannot afford legal support. Our team connects them with lawyers and legal experts who work voluntarily. We spread awareness about human rights and women's safety laws. People learn about their right to education, healthcare, and equality. We organize free legal aid camps in rural areas for common people. Awareness sessions teach how to deal with domestic violence and workplace harassment. We also support victims of injustice by providing emotional and social help. Our aim is to ensure that justice reaches everyone, not just the powerful. Through compassion and guidance, we bring hope to the voiceless."
              },
              {
                icon: "🌳",
                title: "Environment Protection",
                desc: "We believe a clean environment means a healthy life. Our trust regularly organizes tree plantation drives in schools and villages. We teach children about the importance of saving trees and reducing plastic use. Waste management workshops help people reuse and recycle materials. We also clean public areas and spread messages about keeping surroundings neat. Awareness campaigns are run to protect rivers, land, and wildlife. We encourage eco-friendly practices like cloth bags and solar energy. Students are involved in 'Green School' programs to learn sustainability. Our goal is to create cleaner, greener, and safer communities. Together, we can protect nature and save our planet."
              },
              {
                icon: "🚑",
                title: "Disaster Relief",
                desc: "When disaster strikes, we reach first with help and hope. Our volunteers provide food, clothes, and medicines during floods or earthquakes. Temporary shelters are arranged for families who lose their homes. We support rebuilding houses and schools after natural calamities. Relief camps are set up in coordination with local authorities. Medical teams treat the injured and provide emotional support. We also help people recover mentally through counselling sessions. Post-disaster programs teach communities how to be better prepared next time. Our aim is to rebuild lives stronger than before. We believe humanity shines brightest in times of crisis."
              },
              {
                icon: "🤝",
                title: "No Profit – No Loss Work Model",
                desc: "Every activity of our trust is based on honesty and service. We don't work for profit or personal gain but only for public welfare. All donations and expenses are used transparently for social work. Our financial records are shared openly for trust and accountability. Volunteers work selflessly with dedication and compassion. We believe real happiness comes from helping others. Every project is planned with community participation and local needs. The trust stands for equality, fairness, and kindness in all actions. We make sure every rupee is spent for a good cause. This 'No Profit – No Loss' model keeps our mission pure and impactful."
              }
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
