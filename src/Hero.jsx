import './Styles/Hero.css';
import myImage from './assets/icons/github.png';

function Hero() {
    return (
        <>
            <div className="hero-container">
                <div>
                    <img className="my-image" src={myImage} />
                </div>

                <div className="intro">
                    Hi,<br />
                    I'm Sabastian Ihekweme
                </div>

                <div className="tagline">
                    Software Engineering Student • Frontend Development • Data Analytics
                </div>

                <div className="action-buttons">
                    <button className="view-my-work-button">View My Work</button>

                    <button className="download-cv-button">Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Hero;