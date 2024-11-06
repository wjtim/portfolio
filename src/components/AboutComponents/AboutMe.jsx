import React from 'react'
import TiltCardCarousel from './TiltCardCarousel'
import ActivityCarousel from './ActivityCarousel'
import Typewriter from '../MultiPageComponents/Typewriter';
import '../../index.css';

const AboutMe = () => {
  const sentences = [
    "I'm a BSc Computer Science Major from the University of Victoria." ,
    "I have a passion for development using Javascript, Python, and much more.",
    "I also love analyzing data and creating data visualisations."
  ];

  const highlightWords = {
    'computer': 'text-orange-500',
    'science': 'text-orange-500',
    'university': 'text-blue-500',
    'of': 'text-blue-500',
    'victoria': 'text-blue-500',
    'javascript': 'text-yellow-500',
    'python': 'text-blue-500',
    'analyzing': 'text-orange-500',
    'data': 'text-orange-500',
    'visualisations': 'text-orange-500',
  };

  return (
    <div>
    <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> Who I am:"} </div>
    <Typewriter sentences={sentences} typingSpeed={40} delay={2000} highlightWords={highlightWords} />
    <ActivityCarousel />
    <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> What I've been playing:"} </div>
    <TiltCardCarousel />
    </div>
  )
}

export default AboutMe
