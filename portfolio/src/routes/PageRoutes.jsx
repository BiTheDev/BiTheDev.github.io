import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import EducationPage from '../pages/EducationPage/EducationPage';
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage';
import LandingPage from '../pages/LandingPage/LandingPage';

const PageRoutes = () => (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/education" element={<EducationPage/>} />
      <Route path="/experience" element={<ExperiencePage/>} />
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
);

export default PageRoutes;
