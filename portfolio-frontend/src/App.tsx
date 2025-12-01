import React, { useEffect, useState } from "react";
import "./App.css";
import Profile_Photo from "./assets/Filimon-Alem.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout";

// Pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";
import ResumePage from "./pages/resume";
import FollowPage from "./pages/follow";
import NotFoundPage from "./pages/notfound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/follow" element={<FollowPage />} />
          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
