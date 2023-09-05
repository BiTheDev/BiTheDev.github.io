
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ExperienceAndEducation from "./pages/ExperienceAndEducation/ExperienceAndEducation";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
          <Route path="/education-and-experience" element={<Layout>< ExperienceAndEducation/></Layout>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
