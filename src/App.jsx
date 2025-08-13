import { useRef } from 'react';

import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import EducationOverview from './EducationOverview';
import Certifications from './Certifications';
import SkillsAndTools from './SkillsAndTools';
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
        <SkillsAndTools />
      </div>
    </>
  )
}

export default App
