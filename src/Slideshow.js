import React, { useState } from 'react';
import './index.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/imgs/image00011.jpeg",
      alt: "Slide 1",
      title: "A melhor aula de hidroginástica da cidade e região!",
      text: "",
    },
    {
      image: "/imgs/image00014.jpeg",
      alt: "Slide 2",
      title: "Com 15 anos de experiência na área.",
      text: "Sempre realizando o melhor para sua saúde!",
    },
    {
      image: "/imgs/image00042.jpeg",
      alt: "Slide 3",
      title: "Flexibilidade de horários garantida!",
      text: "Venha realizar seu agendamento de forma prática e rápida.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
    <div className="slideshow-container" id="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${currentSlide === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.alt} className="ss" 
style={{ objectFit: "cover", opacity: 0.6 }}
          />
          <div className="text" id="tt">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
    <div id="beneficios" className="custom-shape-divider-bottom-1668283969"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
    </div>
    </div>
  );
};

export default Slideshow;
