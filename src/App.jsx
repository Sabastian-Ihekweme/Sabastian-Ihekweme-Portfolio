import { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import EducationOverview from "./EducationOverview";
import Certifications from "./Certifications";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";
import ContactMe from "./ContactMe";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={ <Hero />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/education" element={<EducationOverview />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<FeaturedProjects />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
