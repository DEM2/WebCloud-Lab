import React from "react";
import "../CSS/Service.css"; 
import Card from "../components/Card";

const services = [
  {
    Title:"Custom mobile apps for your business. ",
    Image: `${import.meta.env.BASE_URL}/assets/Icons/code.png`
  },
  {
    Title:"We transform data into effective strategies.",
    Image: `${import.meta.env.BASE_URL}/assets/Icons/analysis.png`
  },
  {
    Title:"Optimized web platforms for any need.",
    Image: `${import.meta.env.BASE_URL}assets/Icons/web.png`
  }
]

const colors = ["#947dff", "#2ed99d", "#947dff"];

function Services() {
  return (
    <section className="new-section" id="services">
      <div className="container">
        <h2 className="section-title">We Turn Ideas into Reality</h2>
        <p className="section-description">
        We design and develop technological solutions that turn ideas into innovative products. 
        Through software development and data analytics, we optimize processes, enhance efficiency, and enable strategic decision-making. 
        Our blend of technology and creativity brings high-performance digital tools to life, delivering real impact.
        </p>
      </div>
      <div className="services-layout">
        <div className="services-cards-container">
          {services.map((service, index) => (
            <Card key={index} title={service.Title} bgColor={colors[index % colors.length]} image={service.Image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
