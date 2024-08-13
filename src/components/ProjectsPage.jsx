import React from 'react'
import spfDetail from '../Images/ProjectImages/7point5Details.png'
import twitchDetails from '../Images/ProjectImages/TwitcheckDetails.png'
import algoDetails from '../Images/LogoImages/Graphs.png'
import terminalDetails from '../Images/LogoImages/Terminal.png'
import highlanderDetails from '../Images/ProjectImages/HighlanderDetails.png'

const Project = ({ name, description, image}) => {
  return (
    <div className="container mx-auto my-3 p-4 border rounded-lg w-full transform transition-transform duration-300 hover:translate-y-[-5px]">
    <div className="flex flex-col md:flex-row items-start md:space-x-4">
      <div className="max-w-2xl mt-4 text-center">
        <p className='text-2xl font-mono my-2'>{name}</p>
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
  return (
    <div>
    <div className="text-2xl font-mono pr-1 my-5 mx-3"> {"> About My Projects:"} </div>
    <Project 
    name="WJTIM Highlander"
    image={highlanderDetails}
    description="I wanted to try my hand with real time interaction, as well as creating a game, and dabbling in noSQL. This project was a 
    perfect mix of all 3. WJTIM Highlander is a simple game where the most current name input is added to a firestore database, then the time 
    it was recorded is monitored with a timer. Whenever a name is replaced if it was in the top 5 longest times before it was replaced it gets added to a leaderboard.
    This is definitely my most interactive project and for sure one of the most fun to have live."/>
    <Project 
    name="7point5" 
    image={spfDetail}
    description="A full stack web application made with PostgreSQL, Express, React, and Node. This
    web application is a password protected site where events are reviewed using FormData which is digested by the back end, stored, then displayed on the site. It is hosted on an Amazon EC2 instance with image hosting done in an Amazon S3 Bucket.
    This project was my first full stack project and allowed me to experience tons of useful techniques from AWS Hosting, to JSON Web Tokens, Encryption and much more."
    />
    <Project 
    name="Twitcheck"
    image={twitchDetails}
    description="A small django application made to test out using other API's. In this case, the Twitch API.
    Simply put in the name of a streamer, and depending on whether they are online will either play their current livestream for you,
    or let you know that they are offline."
    />
    <Project 
    name="Algorithms"
    image={algoDetails}
    description="This was an excercise to practice a few skills. I wanted to do something that would allow me to reuse my knowledge of data
    structures and algorithms as well as have a chance to create outputs using Python and Matplotlib."
    />
    <Project 
    name="The Terminal"
    image={terminalDetails}
    description="Once I saw the react-console-emulator library, given the terminal theming of this site, I knew I wanted to create a 
    fun interactive experience where I could hide easter eggs and give a trivial command line experience in a fun environment on this site."
    />
    </div>
  )
}

export default ProjectsPage
