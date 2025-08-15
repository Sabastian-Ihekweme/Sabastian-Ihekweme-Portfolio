import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontend from "./assets/icons/code.png";
import data from "./assets/icons/database.png";
import others from "./assets/icons/box.png";
import person from "./assets/icons/person.png";

import './Styles/Certifications.css';
import './Styles/SkillsAndTools.css';
import certificate1 from './assets/icons/certificates/1.png';

function Certifications () {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [slides, setSlides] = useState(4);
    
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize > 1024) {
            setSlides(4);
        } else if (screenSize > 768 && screenSize <=1024) {
            setSlides(2);
        } else if (screenSize < 768) {
            setSlides(1);
        }
    }, screenSize);

    console.log(screenSize);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    arrows: false,
                    swipeToSlide: true,
                    touchMove: true,
                    touchThreshold: 10
                }
            }
        ]
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
        },

    ];

    return (
        <>
            <div className="skills-container certifications-contianer">
                <h2>Skills & Tools</h2>

            <div className="skill-carousel certification-carousel">

            <Slider {...settings}>
                {
                skillSets.map((skillSet, index) => {
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
    )
}

export default Certifications;