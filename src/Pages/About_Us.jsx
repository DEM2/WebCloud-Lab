import React from "react";
import "../CSS/About_Us.css";
import TeamSlider from "../components/TeamSlider";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="team-container">
        <header className="team-header">
          <h1 className="Section_team_title">
          Our Talent,<br/>Your Advantage
          </h1>
          <p className="team-description">
          We are a team driven by innovation and technology, dedicated to developing efficient and creative solutions.
           Our collaborative approach blends expertise in frontend, backend, and project management
            to deliver high-quality products that empower businesses in their digital transformation journey.
          </p>
        </header>
        <TeamSlider/>
      </div>
    </section>
  );
}

export default AboutUs;
