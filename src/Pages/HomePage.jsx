import React from "react";
import "../CSS/HomePage.css";

function Homepage() {
  return (
    <div className="homepage">
      <header>
        <h1 className="principal-title typing" >
          <span className="color1"> Transform</span>
          <span className="color2"> your</span>
          <span className="color3"> Vision</span>
        </h1>
        <p className="principal-text">Into a Stunning Website with Us</p>
        <p className="principal-text">Let's build together your digital success story</p>
        <button>¡Contact now!</button>
      </header>
    </div>
  );
}

export default Homepage;
