import React from 'react';
import Typewriter from '../MultiPageComponents/Typewriter';
import '../../index.css';

function NotFound() {
    
    const sentences = [
      "How'd you get here?",
      "Feel free to peruse!",
      "Not much to see here though...",
      "Use the navigation bar to get out!"
    ];
  
    const highlightWords = {
      'here': 'text-orange-500',
      'peruse': 'text-orange-500',
      'navigation': 'text-blue-500',
      'bar': 'text-blue-500'
    };

    return (
      <div className=''>
        <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> 404 Page Not Found"} </div>
        <Typewriter sentences={sentences} typingSpeed={50} delay={2000} highlightWords={highlightWords} />
      </div>
    );
  }
  
  export default NotFound;