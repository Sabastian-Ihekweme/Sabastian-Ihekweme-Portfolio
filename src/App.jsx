import { useRef } from 'react';

import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import EducationOverview from './EducationOverview';
import Certifications from './Certifications';
import Skills from './Skills';
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <AboutMe />
        <EducationOverview />
        <Certifications />
        <Skills />
      </div>
    </>
  )
}

export default App
