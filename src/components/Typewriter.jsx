import React, { useState, useEffect } from 'react';

const Typewriter = ({ sentences, typingSpeed, delay, highlightWords = {} }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentSentence = sentences[currentSentenceIndex];
    let typingTimeout;

    if (!isDeleting && charIndex < currentSentence.length) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentSentence.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentSentence.length) {
      setPause(true);
      setTimeout(() => {
        setIsDeleting(true);
        setPause(false);
      }, delay);
    } else if (isDeleting && charIndex === 0) {
      setPause(true);
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setPause(false);
      }, 500);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, pause, sentences, currentSentenceIndex, typingSpeed, delay]);

  const getHighlightedText = (text) => {
    const words = text.split(/(\s+)/); // Split by spaces including them in the array
    return words.map((word, index) => {
      const cleanedWord = word.replace(/[.,!?]/g, '').toLowerCase();
      const highlightClass = highlightWords[cleanedWord];
      return (
        <span key={index} className={highlightClass || ''}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className="typewriter text-2xl font-mono mx-3">
      {">"} {getHighlightedText(currentText)}
    </div>
  );
};

export default Typewriter;
