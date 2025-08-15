import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dash from "./assets/icons/projects/dash.png";
import './Styles/Certifications.css';
import './Styles/SkillsAndTools.css';
import './Styles/FeaturedProjects.css';
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
    
    const projects = [
        {
            image: dash,
            title: 'Dash',
            description: `An interactive tool for tracking 
                          & predicting academic performance.`,
            techStack: ['React', 'JavaScript', 'LocalStorage']
        },

        {
            image: dash,
            title: 'Dash',
            description: `An interactive tool for tracking 
                          & predicting academic performance.`,
            techStack: ['React', 'JavaScript', 'LocalStorage']
        }
    ]

    return (
        <>
            <div className="projects-container">
                <h2 className="featured-projects">Featured Projects</h2>

            <div className="skill-carousel projects-carousel certification-carousel">

            <Slider {...settings}>
            {
                projects.map((project, index) => {
                    return (
                        <div className="project">

                            <div className="project-image-div">
                                <img className="project-image" src={dash} />
                            </div>

                            <div className="project-title">
                                <h3>Dash</h3>
                            </div>

                            <div className="project-description">
                                An interactive tool for tracking & predicting academic performance.
                            </div>

                            <div className="tech-stack">

                                {
                                    project.techStack.map((tech, techIndex) => {
                                        return (
                                            <div className="tech">
                                                React
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    )
                })
            }
                

            </Slider>

            </div>

            </div>

        </>
    )
}

export default Certifications;