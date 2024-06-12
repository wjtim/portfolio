// CardCarousel.js
import React, { useState, useEffect } from 'react';

const CardCarousel = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Calculate number of cards per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cards.length / cardsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(cards.length / cardsPerSlide) - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex overflow-hidden">
        {cards.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((card, index) => (
        <a key={index} href={card.link} className="card-link">
          <div className="card-container bg-white shadow-md rounded-lg p-4 m-2">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        </a>
        ))}
      </div>
      <div className="flex mt-4">
        <button onClick={prevSlide} className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
