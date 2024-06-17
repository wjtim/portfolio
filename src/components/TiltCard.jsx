// src/components/TiltCard.jsx
import React from 'react';
import { Tilt } from 'react-tilt';

const TiltCard = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
      <a href={linkUrl} className="Tilt-inner block"  rel="noreferrer" target="_blank">
        <div className="relative w-[244px] h-[360px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          </div>
        </div>
      </a>
    </Tilt>
  );
}

export default TiltCard;
