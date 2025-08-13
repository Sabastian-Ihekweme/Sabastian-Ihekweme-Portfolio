import React, { useState, useEffect } from 'react';

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
                <img className="saby-logo" src={logo} />

                <ul className="header-menu"
                    style={{
                        maxHeight: isDesktop ? 'none' : isOpen ? '400px' : '0px',
                        overflow: isDesktop ? 'visible' : 'hidden',
                        transition: 'max-height 0.3s ease',
                    }} 
                >
                    <li className="header-menu-item">
                        <button onClick={onScrollToAbout}>About</button>
                    </li>

                    <li className="header-menu-item"><a href="">Education</a></li>
                    <li className="header-menu-item"><a href="">Certifications</a></li>
                    <li className="header-menu-item"><a href="">Skills</a></li>
                    <li className="header-menu-item"><a href="">Projects</a></li>
                    <li className="header-menu-item"><a href="">Contact Me</a></li>
                </ul>

                <div className="menu-icon">
                    <img className="hamburger-menu"
                     onClick={() => setIsOpen(!isOpen)} src={menuIcon} />
                </div>
            </nav>
        </>
    )
}

export default Header;