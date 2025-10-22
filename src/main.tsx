import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "@/App";
import HomePage from "@/features/home/HomePage";
import AboutPage from "@/features/about/AboutPage";
import ProjectsPage from "@/features/projects/ProjectsPage";
import ContactPage from "@/features/contact/ContactPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* App envuelve todas las rutas */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);






