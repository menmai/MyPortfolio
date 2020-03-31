import React from 'react';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';

function About() {

    const sectionTitle = "About Me";
    const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis faucibus turpis, \n" +
        "vel sodales eros feugiat sed. Proin malesuada sit amet sapien a tristique. Mauris erat mi, vestibulum \n" +
        "sit amet molestie nec, pretium eu risus. Donec congue erat non lorem fringilla elementum. Sed ac lacus \n" +
        "arcu. Ut sit amet dolor tellus. Duis sapien ligula, rhoncus et fringilla id, congue ullamcorper enim. \n" +
        "Ut nec ex ipsum. Vivamus mattis lacinia erat in imperdiet. Cras sed dui vitae lacus consequat bibendum \n" +
        "ac euismod lorem.";

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
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;