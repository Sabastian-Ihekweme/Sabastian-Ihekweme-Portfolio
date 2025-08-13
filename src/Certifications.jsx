import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Styles/Certifications.css';
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

    const certifications = [
        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        },

        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        },

        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        },

        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        },

        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        },

        {
            image: certificate1,
            name: "The Complete JavaScript Course 2025: From Zero to Expert!",
            issuedBy: "Udemy",
            issuedOn: "August 2025",
            link: "https://www.udemy.com/certificate/UC-a88ec42b-8b9e-4d06-8315-efab82cde1d5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" 
        }
    ]

    return (
        <>
            <div className="certifications-contianer">
                <h2>Certifications</h2>

            <div className="certification-carousel">
            <Slider {...settings}>
                {
                    certifications.map((certification, index) => {
                        return (
                            <div key={index} className="certification">

                                <div className="certificate-image-div">
                                    <img className="certificate-image" src={certificate1} />
                                </div>

                                <div className="certificate-info">
                                    <div className="certificate-name">
                                        {certification.name}
                                    </div>

                                    <p>Issued By: {certification.issuedBy}</p>

                                    <p>Issued On: {certification.issuedOn}</p>

                                    <p className="certificate-link">
                                        <a href={certification.link}
                                        target="null">Show Credential</a></p>
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