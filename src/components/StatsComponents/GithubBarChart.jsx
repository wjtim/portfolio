import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMediaQuery } from 'react-responsive';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const languageColors = {
  JavaScript: '#f65403',
  Python: '#ff8901',
  CSS: '#ffbd28',
  HTML: '#4c5e5e',
};

const formatValue = (value) => {
  if (value >= 1000) {
    return Math.floor(value / 1000) + 'k'; 
  }
  return value.toString(); 
};

const GithubBarChart = ({ repoLanguages }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const reposWithTotalBytes = repoLanguages.map(repo => ({
    name: repo.name,
    totalBytes: Object.values(repo.languages).reduce((sum, bytes) => sum + bytes, 0),
    languages: repo.languages,
  }));

  const sortedRepos = reposWithTotalBytes.sort((a, b) => b.totalBytes - a.totalBytes);

  const chartData = {
    labels: sortedRepos.map(repo => repo.name),
    datasets: Object.keys(languageColors).map(lang => {
      return {
        label: lang,
        data: sortedRepos.map(repo => repo.languages[lang] || 0),
        backgroundColor: languageColors[lang],
        stack: 'Stack 0',
      };
    }),
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      datalabels: {
        display: !isMobile,
        anchor: 'center',
        align: 'center',
        formatter: (value) => {
          if (value === 0) return ''; 
          return formatValue(value); 
        },
        color: 'white',
        font: {
          weight: 'bold',
          size: 10,
        },
        clip: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Total Bytes',
        },
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        stacked: true,
        grid: {
          display: false,
        },
        position: 'right',
      },
    },
  };

  return (
    <div className="my-5">
      <div className="flex justify-center mb-2 flex-wrap">
        {Object.entries(languageColors).map(([lang, color]) => (
          <div key={lang} className="flex items-center mx-2">
            <div className="w-4 h-4" style={{ backgroundColor: color }}></div>
            <span className="ml-2 text-sm">{lang}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-72 md:h-96">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GithubBarChart;
