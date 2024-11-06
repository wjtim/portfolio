import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const languageColors = {
  JavaScript: 'rgba(253, 129, 5, 0.9)', // Slightly less transparency
  Python: 'rgba(235, 75, 53, 0.9)',
  CSS: 'rgba(144, 183, 182, 0.9)',
  HTML: 'rgba(76, 94, 94, 0.9)',
};

const formatValue = (value) => {
  if (value >= 1000) {
    return Math.floor(value / 1000) + 'k'; 
  }
  return value.toString(); 
};

const GithubPolarChart = ({ languageTotals }) => {
  // Prepare the data for the Polar Area chart
  const transformedData = Object.values(languageTotals).map(value => Math.sqrt(value));
  const chartData = {
    labels: Object.keys(languageTotals),
    datasets: [
      {
        label: 'Bytes of Code',
        data: transformedData,
        backgroundColor: Object.keys(languageTotals).map((lang) => languageColors[lang] || 'rgba(204, 204, 204, 0.9)'),
        borderColor: 'rgba(255, 255, 255, 0.6)', // Add a white border for better visibility
        borderWidth: 2, // Increase the border width
        borderJoinStyle: 'round', // Round border edges for better appearance
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position legend at the top
        align: 'center',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            // Show the original byte count in the tooltip
            return `${context.label}: ${(context.raw ** 2).toLocaleString()} bytes`; // Square the value back for display
          },
        },
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        formatter: (value) => {
          if (value === 0) return ''; 
          return formatValue(value ** 2); // Format original value
        },
        color: 'white',
        font: {
          weight: 'bold',
          size: 10, // You might want to adjust this based on screen size
        },
        clip: true,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          display: false, // Hide the value labels on the axes
        },
        grid: {
          display: true, // Display the polar grid
        },
      },
    },
  };

  return (
    <div className="my-5 mx-auto max-w-full sm:max-w-3xl p-4 shadow-md rounded-lg">
      <PolarArea data={chartData} options={options} />
    </div>
  );
};

export default GithubPolarChart;
