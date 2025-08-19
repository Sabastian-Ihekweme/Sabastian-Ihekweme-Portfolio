import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import EducationOverview from "./EducationOverview";
import Certifications from "./Certifications";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";
import ContactMe from "./ContactMe";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/education" element={<EducationOverview />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<FeaturedProjects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
