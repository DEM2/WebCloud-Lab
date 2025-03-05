import React from "react";
import "../CSS/HomePage.css";
import ParticlesBackground from "../components/ParticlesBackground";

function Homepage() {

  return (
    <div className="homepage" id="home" >
     <ParticlesBackground />
      <header className="content">
        <h1 className="principal-title" >
          <span className="color1"> Transform</span>
          <span className="color2"> your</span>
          <span className="color3"> Vision</span>
        </h1>
        <p className="principal-text">From powerful software to practical insights,
           we create innovative solutions that drive efficiency, growth, and competitive advantage.</p>
        <button className="button"  style={{ verticalAlign: "middle" }}
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}> <span>¡Contact now!</span></button>
      </header>
    </div>
  );
}

export default Homepage;
