import React from 'react';
import reactLogo from '../Images/ReactLogo.png';
import tailwindLogo from '../Images/TailwindLogo.png'
import bootstrapLogo from '../Images/BootstrapLogo.png'
import jsLogo from '../Images/JavascriptLogo.webp'
import htmlLogo from '../Images/HtmlLogo.png'
import cssLogo from '../Images/CssLogo.svg'
import nodeLogo from '../Images/NodejsLogo.png'
import expressLogo from '../Images/ExpressLogo.png'
import psqlLogo from '../Images/PostgresLogo.png'
import pythonLogo from '../Images/PythonLogo.png'
import javaLogo from '../Images/JavaLogo.png'
import flaskLogo from '../Images/FlaskLogo.png'
import djangoLogo from '../Images/DjangoLogo.png'
import mongoLogo from '../Images/MongodbLogo.png'
import cLogo from '../Images/CLogo.png'
import qgisLogo from '../Images/QgisLogo.png'
import arcLogo from '../Images/ArcgisLogo.png'
import sqlLogo from '../Images/SqlLogo.png'
import dockerLogo from '../Images/DockerLogo.png'
import awsLogo from '../Images/AwsLogo.png'
import sqliteLogo from '../Images/SqliteLogo.webp'
import csharpLogo from '../Images/CsharpLogo.png'
import cppLogo from '../Images/CppLogo.png'

const SkillSection = () => {
  return (
    <div className="bg-white text-black font-mono py-12">
      <div className="container mx-auto px-4">
        <Category title="Programming Languages">
          <Technology name="Python" proficiency={100} image={pythonLogo} />
          <Technology name="JavaScript" proficiency={90} image={jsLogo} />
          <Technology name="Java" proficiency={75} image={javaLogo} />
          <Technology name="C" proficiency={75} image={cLogo} />
          <Technology name="C#" proficiency={70} image={csharpLogo} />
          <Technology name="C++" proficiency={65} image={cppLogo} />
        </Category>
        
        <Category title="The Web">  
          <Technology name="HTML5" proficiency={100} image={htmlLogo} />
          <Technology name="CSS3" proficiency={100} image={cssLogo} />
          <Technology name="React" proficiency={90} image={reactLogo} />
          <Technology name="Tailwind CSS" proficiency={90} image={tailwindLogo} />
          <Technology name="Bootstrap" proficiency={90} image={bootstrapLogo} />
          <Technology name="Node.js" proficiency={90} image={nodeLogo} />
          <Technology name="Express.js" proficiency={90} image={expressLogo} />
          <Technology name="AWS" proficiency={80} image={awsLogo} />
          <Technology name="Django" proficiency={75} image={djangoLogo} />
          <Technology name="Flask" proficiency={75} image={flaskLogo} />

        </Category>
        
        <Category title="Databases">
          <Technology name="SQL" proficiency={100} image={sqlLogo} />
          <Technology name="PostgreSQL" proficiency={100} image={psqlLogo} />
          <Technology name="SQLite" proficiency={90} image={sqliteLogo} />
          <Technology name="MongoDB" proficiency={75} image={mongoLogo} />
        </Category>

        <Category title="And More">
          <Technology name="Docker" proficiency={75} image={dockerLogo} />
          <Technology name="QGIS" proficiency={70} image={qgisLogo} />
          <Technology name="ArcGIS" proficiency={70} image={arcLogo} />
        </Category>
      </div>
    </div>
  );
};

const Category = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8">
        {children}
      </div>
    </div>
  );
};

const getColor = (proficiency) => {
  if (proficiency >= 75) {
    return 'bg-green-500';
  } else if (proficiency >= 60) {
    return 'bg-yellow-500';
  } else if (proficiency >= 50) {
    return 'bg-orange-500';
  } else {
    return 'bg-red-500';
  }
};

const Technology = ({ name, proficiency, image }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg w-36 h-36 transform transition-transform duration-300 hover:translate-y-[-10px]">
      <img src={image} alt={`${name} icon`} className="w-16 h-16 mb-2" />
      <p className="text-center mb-2 text-sm">{name}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${getColor(proficiency)} h-2 rounded-full`} style={{ width: `${proficiency}%` }}></div>
      </div>
    </div>
  );
};

export default SkillSection;
