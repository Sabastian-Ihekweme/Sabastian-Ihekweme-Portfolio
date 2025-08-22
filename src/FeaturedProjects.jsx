import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dash from "./assets/icons/projects/dash.png";
import taskmaster from "./assets/icons/projects/taskmaster.png";
import './Styles/Certifications.css';
import './Styles/SkillsAndTools.css';
import './Styles/FeaturedProjects.css';
import certificate1 from './assets/icons/certificates/1.png';
import { motion } from 'framer-motion';

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
    }, [screenSize]);

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
    
    const projects = [
        {
            link: "https://sabastian-ihekweme.github.io/dash-gpa-tracker/",
            image: dash,
            title: 'Dash',
            description: `An interactive tool for tracking 
                          & predicting academic performance.`,
            techStack: ['React', 'JavaScript', 'LocalStorage']
        },

        {
            link: "https://sabastian-ihekweme.github.io/Sabastian-Taskmaster-frontend/",
            image: taskmaster,
            title: 'Taskmaster',
            description: `Personal task management web app with task 
                          creation, deadlines, priority levels, reminders, and 
                          journaling features using HTML, CSS, JavaScript, 
                          and local storage.`,
            techStack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
        }
    ]

    return (
        <>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
            className="projects-container">
                <h2 className="featured-projects">Featured Projects</h2>

            <div className="skill-carousel projects-carousel certification-carousel">

            <Slider {...settings}>
            {
                projects.map((project, index) => {
                    return (
                        <div className="project">
                        <a href={project.link}>
                            <div className="project-image-div">
                                <img className="project-image" src={project.image} />
                            </div>

                            <div className="project-title">
                                <h3>{project.title}</h3>
                            </div>

                            <div className="project-description">
                               {project.description}
                            </div>

                            <div className="tech-stack">

                                {
                                    project.techStack.map((tech, techIndex) => {
                                        return (
                                            <div className="tech">
                                                {tech}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </a>
                        </div>
                    )
                })
            }
                

            </Slider>

            </div>

            </motion.div>

        </>
    )
}

export default Certifications;