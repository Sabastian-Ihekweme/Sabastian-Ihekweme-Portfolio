import "./Styles/AboutMe.css";
import {motion} from "framer-motion";

function AboutMe() {
    return (
        <>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
             className="about-me-container">
                <h2>About Me</h2>

                <div className="about-me">
                    I’m a final-year Software Engineering student passionate 
                    about creating intuitive digital experiences and uncovering 
                    insights through data. My interests span frontend development, 
                    data analysis, and the transformative potential of artificial 
                    intelligence. I’m driven by a desire to solve real-world problems, 
                    make technology easy to use, and contribute solutions that 
                    create lasting impact in society.
                </div>
            </motion.div>
        </>
    )
}

export default AboutMe;
