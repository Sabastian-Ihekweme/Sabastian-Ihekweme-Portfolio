import './Styles/EducationOverview.css';
import schoolIcon from './assets/icons/school.png';

function EducationOverview() {
    return (
        <>
            <div className="education-overview-container">
                <h2>Education</h2>

                <div className="education-card-slider">

                    <div className="education">

                        <div className="education-header">
                            <div className="school-icon-div">
                                <img className="school-icon" src={schoolIcon} />
                            </div>

                            <div className="education-description">
                                <p className="school-name">Nile University of Nigeria</p>
                                <span className="time-period">
                                    September 2022 - June 2026
                                </span>
                            </div>
                        </div>

                            <hr className="slim-line"/>

                            <div className="education-info">

                                <div className="degree-name">
                                    <h3>Bachelor of Science in 
                                        Software Engineering</h3>
                                </div>

                                <div className="grade">
                                    <p className="cgpa">Cummulative GPA: 4.73/5</p>
                                </div>

                                <div className="course-work">
                                    Relevant coursework include Web Application 
                                    Development, Software Engineering Process, 
                                    Data Structures, Database Management, and 
                                    Operations Research.
                                </div>

                                <div className="activities">
                                    Active member of Google Developers Student Club, 
                                    Nile Model UN, National Association of Computing 
                                    Students (NACOS), and Nile Christian Fellowship, 
                                    gaining valuable teamwork and leadership 
                                    experience.
                                </div>

                            </div>
                        </div>

                    </div>


            </div>
        </>
    )
}

export default EducationOverview;
