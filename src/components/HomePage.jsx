import React from 'react';
import Typewriter from './Typewriter';
import CardCarousel from './CardCarousel';
import SkillSection from './SkillSection';
import graphs from '../Images/LogoImages/Graphs.png';
import spf from '../Images/LogoImages/7point5.png';
import twitcheck from '../Images/LogoImages/Twitcheck.png';
import portfolio from '../Images/LogoImages/Portfolio.png';
import terminal from '../Images/LogoImages/Terminal.png';
import '../index.css';



function HomePage() {
  const sentences = [
    "Welcome to my site.",
    "I'm a developer.",
    "I love creating with Javascript and Python.",
    "I'm constantly striving to improve."
  ];

  const highlightWords = {
    'site': 'text-orange-500',
    'developer': 'text-orange-500',
    'javascript': 'text-yellow-500',
    'python': 'text-blue-500',
    'improve': 'text-orange-500'
  };
  const cards = [
    {
      title: '7point5.club',
      description: 'A password protected secret club site. This is a full stack project using PERN.',
      image: spf,
      link: "http://7point5.club"
    },
    {
      title: 'Twitcheck',
      description: 'A small application made with Django to check if a streamer is live on twitch',
      image: twitcheck,
      link: "https://twitcheck.fly.dev"
    },
    {
      title: 'Algorithm Animations',
      description: 'To flex my DSA muscle and keep it sharp. I made visualisations using Python`s Matplotlib',
      image: graphs,
      link: "/animations"
    },
    {
      title: 'The Terminal',
      description: 'A terminal emulator made as a fun way to practice using React hooks and refs as well as trees.',
      image: terminal,
      link: "/terminal"
    },
    {
      title: 'This Site!',
      description: 'A React portfolio site designed to show a bit about me and my projects',
      image: portfolio,
      link: "/"
    }
  ];

  return (
    <div className=''>
      <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> Hi, I'm Wyatt"} </div>
      <Typewriter sentences={sentences} typingSpeed={50} delay={2000} highlightWords={highlightWords} />
      <div className="text-2xl font-mono pr-1 my-5 mx-3"> {"> I've Been Working On:"} </div>
      <CardCarousel cards={cards}/>
      <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> I Know:"} </div>
      <SkillSection />
    </div>
  );
}

export default HomePage;
