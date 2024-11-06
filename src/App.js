import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../src/components/LandingComponents/HomePage';
import Navbar from '../src/components/MultiPageComponents/Navbar';
import MyTerminal from '../src/components/TerminalComponents/MyTerminal';
import AboutMe from '../src/components/AboutComponents/AboutMe';
import ProjectsPage from '../src/components/ProjectComponents/ProjectsPage';
import Algorithms from '../src/components/AlgorithmComponents/Algorithms';
import Footer from '../src/components/MultiPageComponents/Footer';
import StatsPage from '../src/components/StatsComponents/StatsPage'
import NotFound from '../src/components/404/NotFound';

function App() {

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="algorithms" element={<Algorithms />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="terminal" element={<MyTerminal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
