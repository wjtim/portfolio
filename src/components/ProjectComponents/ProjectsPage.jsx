import React, { useState } from 'react';
import spfDetail from '../../Images/ProjectImages/7point5Details.png'
import twitchDetails from '../../Images/ProjectImages/TwitcheckDetails.png'
import algoDetails from '../../Images/LogoImages/Graphs.png'
import terminalDetails from '../../Images/LogoImages/Terminal.png'
import highlanderDetails from '../../Images/ProjectImages/HighlanderDetails.png'
import modernsenseDetails from '../../Images/ProjectImages/ModernSenseDetails.png'

const projectsData = [
  {
    name: "ModernSense",
    description: "A Python and Flask application that applies ML sentiment analysis models to user input data. The user can either manually enter a review and rating, or upload a batch of reviews and ratings via csv. The model will analyze the sentiment of the input review and determine whether it accurately matches the rating given. ",
    image: modernsenseDetails,
    technologies: ["Python", "Flask", "Machine Learning"],
    url: "https://github.com/wjtim/modernSense"
  },
  {
    name: "WJTIM Highlander",
    description: "I wanted to try my hand with real time interaction, as well as creating a game, and dabbling in noSQL. This project was a perfect mix of all 3. WJTIM Highlander is a simple game where the most current name input is added to a firestore database, then the time it was recorded is monitored with a timer. Whenever a name is replaced if it was in the top 5 longest times before it was replaced it gets added to a leaderboard.This is definitely my most interactive project and for sure one of the most fun to have live.",
    image: highlanderDetails,
    technologies: ["React", "Node", "Firebase", "NoSQL", "JavaScript"],
    url: "https://highlander.wjtim.com/"
  },
  {
    name: "7point5",
    description: "A full stack web application made with PostgreSQL, Express, React, and Node. Thisweb application is a password protected site where events are reviewed using FormData which is digested by the back end, stored, then displayed on the site. It is hosted on an Amazon EC2 instance with image hosting done in an Amazon S3 Bucket. This project was my first full stack project and allowed me to experience tons of useful techniques from AWS Hosting, to JSON Web Tokens, Encryption and much more.",
    image: spfDetail,
    technologies: ["PostgreSQL", "Express", "React", "Node", "AWS", "JavaScript"],
    url: "http://7point5.club/"
  },
  {
    name: "Twitcheck",
    description: "A small django application made to test out using other API's. In this case, the Twitch API. Simply put in the name of a streamer, and depending on whether they are online will either play their current livestream for you,or let you know that they are offline.",
    image: twitchDetails,
    technologies: ["Django", "Python"],
    url: "https://twitcheck.fly.dev/"
  },
  {
    name: "Algorithms",
    description: "This was an excercise to practice a few skills. I wanted to do something that would allow me to reuse my knowledge of data structures and algorithms as well as have a chance to create outputs using Python and Matplotlib.",
    image: algoDetails,
    technologies: ["Python"],
    url: "https://wjtim.com/algorithms"
  },
  {
    name: "The Terminal",
    description: "Once I saw the react-console-emulator library, given the terminal theming of this site, I knew I wanted to create a fun interactive experience where I could hide easter eggs and give a trivial command line experience in a fun environment on this site.",
    image: terminalDetails,
    technologies: ["React", "JavaScript"],
    url: "https://wjtim.com/terminal"
  },
];
const Project = ({ name, description, image, url}) => {
  return (
    <div className="container mx-auto my-3 p-4 border rounded-lg w-full transform transition-transform duration-300 hover:translate-y-[-5px]">
    <div className="flex flex-col md:flex-row items-start md:space-x-4">
      <div className="max-w-2xl mt-4 text-center">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-2xl font-mono my-2 hover:text-orange-500 cursor-pointer">
            {name}
          </a>
        <p className='font-mono my-2'>{description}</p>
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col">
       <img src={image} alt="Sorting Algorithm GIF" className="rounded shadow-md" />
      </div>
    </div>
  </div>
  );
};

const ProjectsPage = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  // Convert the Set to an array and sort alphabetically, then add "All" at the top
  const uniqueTechnologies = ["All", ...Array.from(new Set(projectsData.flatMap(project => project.technologies))).sort()];

  const filteredProjects = selectedTech === "All" 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(selectedTech));

  return (
    <div>
      <div className="text-2xl font-mono pr-1 my-5 mx-3">{"> About My Projects:"}</div>
      
      <div className="my-4 mx-3">
        <label className="text-2xl font-mono pr-1 my-5 mx-3" htmlFor="techFilter">Filter by Technology</label>
        <select 
          id="techFilter" 
          value={selectedTech} 
          onChange={(e) => setSelectedTech(e.target.value)}
          className="p-2 border rounded"
        >
          {uniqueTechnologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      {filteredProjects.map((project, index) => (
        <Project 
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
          url={project.url}
        />
      ))}
    </div>
  );
};



export default ProjectsPage
