import React from 'react'
import spfDetail from '../Images/ProjectImages/7point5Details.png'
import twitchDetails from '../Images/ProjectImages/TwitcheckDetails.png'
const ProjectsPage = () => {
    const Project = ({ name, description, image, skills }) => {
        return (
          <div className="flex flex-col items-right my-3 p-4 border rounded-lg w-144 h-144 transform transition-transform duration-300 hover:translate-y-[-5px]">
            <p className="text-2xl font-mono pr-1 my-3 mx-3">{name}</p>
            <p className="text-left font-mono mb-3 mx-3 my-3 text-sm">{description}</p>
            <img src={image} alt={`${name} icon`} className="w-144 h-144 mb-2" />
          </div>
        );
      };

  return (
    <div>
    <div className="text-2xl font-mono pr-1 my-5 mx-3"> {"> About My Projects:"} </div>
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
    image=""
    description="A small django application made to test out using other API's. In this case, the Twitch API.
    Simply put in the name of a streamer, and depending on whether they are online will either play their current livestream for you,
    or let you know that they are offline."
    />
    <Project 
    name="The Terminal"
    image=""
    description="A small django application made to test out using other API's. In this case, the Twitch API.
    Simply put in the name of a streamer, and depending on whether they are online will either play their current livestream for you,
    or let you know that they are offline."
    />
    </div>
  )
}

export default ProjectsPage
