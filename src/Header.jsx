import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import './Styles/Header.css';
import logo from './assets/logo.png';
import menuIcon from './assets/icons/menu.png';

function Header({ onScrollToHero, onScrollToAbout, onScrollToProjects, onScrollToContact }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
            return () => window.removeEventListener('resize', handleResize);
    }, []);

  const isDesktop = windowWidth >= 768;

    return (
        
        <>
            <nav>
                <NavLink to="/" end>
                <img className="saby-logo" src={logo} />
                </NavLink>

                <ul className="header-menu"
                    style={{
                        maxHeight: isDesktop ? 'none' : isOpen ? '400px' : '0px',
                        overflow: isDesktop ? 'visible' : 'hidden',
                        transition: 'max-height 0.3s ease',
                    }} 
                >
                    <li className="header-menu-item">
                        <NavLink to="about-me">
                            About
                        </NavLink>
                    </li>

                    <li className="header-menu-item">
                        <NavLink to="/education">Education</NavLink>
                        </li>

                    <li className="header-menu-item">
                        <NavLink to="/certifications">
                        Certifications</NavLink>
                       </li>

                    <li className="header-menu-item">
                        <NavLink to="/skills">
                            Skills
                        </NavLink>
                    </li>

                    <li className="header-menu-item">
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>

                    <li className="header-menu-item">
                        <NavLink to="/contact-me">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>

                <div className="menu-icon">
                    <img className="hamburger-menu"
                     onClick={() => setIsOpen(isOpen == false ? !isOpen : false)} src={menuIcon} />
                </div>
            </nav>
        </>
    )
}

export default Header;