import React from 'react';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';

function About() {

    const sectionTitle = "About Me";
    const aboutText = "Self motivated developer, passionate about innovation and using modern technology \n" +
        "to develop unique value-providing solutions and high quality of work. Demonstrated ability to write \n" +
        "efficient and modular code for numerous projects in fast paced environments with reliability. Actively \n" +
        "participated in planning and operations of projects as directed by management. Exceptional in effective \n" +
        "communication, collaboration and teamwork. Eager to leverage programming capabilities in tandem with a \n" +
        "STEM background.";

    const skillsText = "Java • Python 3 • C#/.NET • JavaScript (ES6) • HTML5 • CSS3 • React • BootStrap • jQuery • \n" +
        "GUI Development (Swing) • Node.js • PostgreSQL • MongoDB • Postman • Git • SourceTree • Docker • Windows •  \n" +
        "Linux • Ubuntu • VirtualBox • WinSCP • Gradle • Kotlin • MATLAB • AWS • Unit Testing • QA/QC • ML";

    return (
        <div id="about" className="basic-container">
            <div className="about-section">
                <div className="flex-wrapped">
                    <div className="profile-image">
                        <Image src={profile} roundedCircle/>
                    </div>
                    <div className = "about-text">
                        <h1>{sectionTitle}</h1>
                        <hr/>
                        <p>{aboutText}</p>
                        <p>Various levels of experience with:</p>
                        <p>{skillsText}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;
