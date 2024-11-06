import React, { useEffect, useState } from 'react';

const GithubTotaler = ({ totalLines, languageTotals }) => {
  const [displayedTotal, setDisplayedTotal] = useState(0);
  const [animatedLanguageTotals, setAnimatedLanguageTotals] = useState({});

  useEffect(() => {
    // Animate the total lines of code (bytes)
    let startTotal = 0;
    const duration = 2000;
    const incrementTotal = Math.ceil(totalLines / (duration / 16));

    const totalCounter = setInterval(() => {
      startTotal += incrementTotal;
      if (startTotal >= totalLines) {
        startTotal = totalLines;
        clearInterval(totalCounter);
      }
      setDisplayedTotal(startTotal);
    }, 16);

    return () => clearInterval(totalCounter);
  }, [totalLines]);

  useEffect(() => {
    // Animate each language total
    Object.entries(languageTotals).forEach(([language, bytes]) => {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(bytes / (duration / 16));

      const languageCounter = setInterval(() => {
        start += increment;
        if (start >= bytes) {
          start = bytes;
          clearInterval(languageCounter);
        }
        setAnimatedLanguageTotals((prevTotals) => ({
          ...prevTotals,
          [language]: start,
        }));
      }, 16);
    });
  }, [languageTotals]);

  // Sort the languages by the number of bytes
  const sortedLanguages = Object.entries(languageTotals).sort((a, b) => b[1] - a[1]);

  return (
    <div className="text-left mx-5 my-5 p-5 shadow-lg">
      <h2 className="text-2xl font-mono mb-2">{"> I've published"}</h2>
      <p className="text-2xl font-mono mb-2">
        <strong>{displayedTotal}</strong> bytes of code
      </p>
      <h3 className="text-2xl font-mono mb-2">{"> This includes"}</h3>
      <ul className="list-none p-0 m-0">
        {sortedLanguages.map(([language, bytes]) => (
          <li key={language} className="text-2xl font-mono mb-2">
            <strong>{animatedLanguageTotals[language] || 0}</strong> in {language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubTotaler;
