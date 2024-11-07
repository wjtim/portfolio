// src/components/StatsComponents/StatsPage.jsx
import React, { useEffect, useState } from 'react';
import GithubTotaler from './GithubTotaler';
import GithubCharts from './GithubBarChart'; 
import GithubPolarChart from './GithubPolarChart';
import '../../index.css';

const StatsPage = () => {
  const [repoLanguages, setRepoLanguages] = useState([]);
  const [error, setError] = useState(null);
  const [totals, setTotals] = useState({ totalLines: 0, languageTotals: {} });

  useEffect(() => {
    const fetchLanguageData = async () => {
      try {
        const response = await fetch('/.netlify/functions/githubStats');
        if (!response.ok) throw new Error('Failed to fetch data from the server');
        
        const { data } = await response.json();

        const repositories = data.viewer.repositories.nodes.map(repo => ({
          name: repo.name,
          languages: Object.fromEntries(
            repo.languages.edges.map(edge => [edge.node.name, edge.size])
          ),
        }));

        // Calculate totals
        const totals = repositories.reduce(
          (acc, repo) => {
            for (const [language, size] of Object.entries(repo.languages)) {
              acc.languageTotals[language] = (acc.languageTotals[language] || 0) + size;
              acc.totalLines += size;
            }
            return acc;
          },
          { totalLines: 0, languageTotals: {} }
        );

        setRepoLanguages(repositories);
        setTotals(totals);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchLanguageData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Display total lines of code */}
      <GithubTotaler totalLines={totals.totalLines} languageTotals={totals.languageTotals} />
      {/* Render the GithubCharts component */}
      <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> Language use by project"} </div>
      <GithubCharts repoLanguages={repoLanguages} />
      <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> Total language use (bytes)"} </div>
      <div className="md:w-1/3 w-full md:pr-4 mx-3">
        <GithubPolarChart languageTotals={totals.languageTotals} />
      </div>
    </div>
  );
};

export default StatsPage;
