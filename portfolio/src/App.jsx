import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Layout><HomePage /></Layout>} />
          <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
          <Route path="/education" element={<Layout><EducationPage /></Layout>} />
          <Route path="/experience" element={<Layout><ExperiencePage /></Layout>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
