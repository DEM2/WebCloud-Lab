import React from "react";
import "../CSS/Card.css";

const Card = ({ image, title, bgColor}) => {
  return (
    <div className="cd" style={{ backgroundColor: bgColor }}>
      <div className="cd-content">
        <img src={image} alt={title} className="cd-image" />
        <h3 className="cd-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;

