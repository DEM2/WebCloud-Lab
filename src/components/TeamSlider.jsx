import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import '../CSS/TeamSlider.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const teamMembers = [
  {
    image: "src/assets/Images/juanCampanella.jpg",
    name: "Juan Jose Campanella",
    profession: "BSc. Systems Engineering",
    description: "Apasionado por la tecnología y la experiencia de usuario."
  },
  {
    image: "src/assets/Images/danielMendoza.jpeg",
    name: "Daniel Mendoza",
    profession: "BSc. Systems Engineering",
    description: "Systems Engineer specialized in software development and project management, creating efficient and innovative solutions.",
    link: "https://www.linkedin.com/in/daniel-enrique-mendoza-contreras-138a31263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: "src/assets/Images/vanessaFontalvo.jpg",
    name: "Vanessa Fontalvo",
    profession: "BSc. Systems Engineering",
    description: "Lidera proyectos de manera eficiente con visión estratégica."
  }
];

const TeamSlider = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          coverflowEffect: { depth: 1, modifier: 1, stretch: 0 }
        },
        484: {
          slidesPerView: 2,
          coverflowEffect: { depth: 200, modifier: 3.5, stretch: 23 }
        },
        768: {
          slidesPerView: 2,
          coverflowEffect: { depth: 200, modifier: 3.2, stretch: 30 }
        },
        1024: {
          slidesPerView: 3,
          coverflowEffect: { depth: 240, modifier: 1.5, stretch: 30 }
        },
        1200: {
          slidesPerView: 4,
          coverflowEffect: { depth: 300, modifier: 1, stretch: 12 }
        },
      }}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index} className="card">
          <div className="card__image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{member.name}</h3>
            <p className="card__profession">{member.profession}</p>
            <p className="card__text">{member.description}</p>
            <button className='card__btn' onClick={() => window.location.href = member.link}>View More</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
