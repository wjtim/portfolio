import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import MyTerminal from './components/MyTerminal';
import AboutMe from './components/AboutMe';
import ProjectsPage from './components/ProjectsPage';
import Algorithms from './components/Algorithms';


function App() {

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="animations" element={<Algorithms />} />
        <Route path="terminal" element={<MyTerminal />} />
        <Route path="*" element={"Not Found"} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
