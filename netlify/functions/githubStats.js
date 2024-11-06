// netlify/functions/githubStats.js
const fetch = require('node-fetch');

exports.handler = async () => {
  const githubApiKey = process.env.GITHUB_API_KEY;

  
  const query = `
    query {
      viewer {
        repositories(first: 10) {
          nodes {
            name
            languages(first: 10) {
              edges {
                node {
                  name
                }
                size
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${githubApiKey}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data from GitHub', error: error.toString() }),
    };
  }
};