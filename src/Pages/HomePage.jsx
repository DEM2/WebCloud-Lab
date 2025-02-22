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
          <span className="color1"> Transform</span>
          <span className="color2"> your</span>
          <span className="color3"> Vision</span>
        </h1>
        <p className="principal-text">Into a Stunning Website with Us</p>
        <p className="principal-text">¡Let&apos;s build together your digital success story!</p>
        <button className="contact">Contact Us</button>
      </header>
    </div>
  );
}

export default Homepage;
