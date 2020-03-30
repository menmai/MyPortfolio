import React from 'react';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';

function About() {

    return (
        <div className = "about-container">
            <div className = "about-section">
                <div className = "profile-image">
                    <Image src={profile} roundedCircle/>
                </div>
            </div>
        </div>
    );

}

export default About;