import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Styles/SkillsAndTools.css";
import frontend from "./assets/icons/code.png";
import data from "./assets/icons/database.png";
import others from "./assets/icons/box.png";
import person from "./assets/icons/person.png";

function SkillsAndTools() {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const skillSets = [
    {
      icon: frontend,
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
      icon: data,
      category: "Data Analytics",
      skills: ["Excel", "MySQL"],
    },

    {
        icon: others,
        category: "Others",
        skills: ["Git", "GitHub", "Figma", "Visily"]
    },

    {
        icon: person,
        category: "Interpersonal",
        skills: ["Team Collaboration", "Leadership", "Adaptability", "Attention to Detail"]
    }
  ];

  return (
    <>
      <div className="skills-container">
        <h2>Skills & Tools</h2>
        <div className="skills-carousel">
        <Slider {...settings}>
        {skillSets.map((skillSet, index) => {
          return (
            <div key={index} className="skill-category">
              <div className="category-header">
                <img className="category-icon" src={skillSet.icon} />
                <h3 className="category-name">{skillSet.category}</h3>
              </div>

              <div className="skill-stack">
                {skillSet.skills.map((skill, index) => {
                  return <div key={index} className="skill">{skill}</div>;
                })}
              </div>
            </div>
          );
        })}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default SkillsAndTools;
