import React from "react";
import "../CSS/HomePage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <header>
        <h1 className="principal-title typing">
          <span className="color"> Transform your vision </span>
        </h1>
        <p className="principal-text">Into a Stunning Website with Us</p>
        <p className="principal-texts">¡Let&apos;s build together your digital success story!</p>
        <button className="contact">Contact Us</button>
      </header>
    </div>
  );
}

export default Homepage;
