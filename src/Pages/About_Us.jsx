import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../CSS/About_Us.css";

function AboutUs() {
  const teamMembers = [
    {
      image: "src/assets/juanCampanella.jpg",
      name: "Juan Jose Campanella",
      profession: "BSc. Systems Engineering",
      description: "Apasionado por la tecnología y la experiencia de usuario.",
    },
    {
      image: "src/assets/danielMendoza.jpeg",
      name: "Daniel Mendoza",
      profession: "BSc. Systems Engineering",
      description: "Desarrollador web con capacidad de adaptación, trabajo en equipo y enfoque en soluciones eficientes e innovadoras.",
    },
    {
      image: "src/assets/vanessaFontalvo.jpg",
      name: "Vanessa Fontalvo",
      profession: "BSc. Systems Engineering",
      description: "Lidera proyectos de manera eficiente con visión estratégica.",
    },
  ];

  return (
    <section className="about-us">
      <div className="team-background"></div>
      <div className="team-container">
        <header className="team-header">
          <h1 className="Section_team_title">Our Team</h1>
          <p className="team-description">
            We are a team passionate about innovation and technology, committed to developing
            efficient and creative solutions. We work together to deliver high-quality products,
            combining expertise in frontend, backend, and project management.
          </p>
        </header>
        <div className="profiles-container">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
