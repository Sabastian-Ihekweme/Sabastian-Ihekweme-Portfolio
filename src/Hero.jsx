import React, { useEffect } from 'react';
import "./Styles/Hero.css";
import myImage from "./assets/icons/me.jpeg";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

function Hero() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="hero-container"
      >
        <div>
          <img className="my-image" src={myImage} />
        </div>

        <div className="intro">
          Hi,
          <br />
          I'm Sabastian Ihekweme
          <div className="tagline">
            Software Engineering Student • Frontend Development • Data Analytics
          </div>
          <div className="action-buttons">
            <button className="view-my-work-button">
              <NavLink to="/projects">View My Work</NavLink>
            </button>

            <a
              href="Sabastian-Ihekweme.pdf"
              target="null"
              download="Sabastian-Ihekweme.pdf"
            >
              <button className="download-cv-button">Download CV</button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
