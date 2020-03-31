import React from 'react';

function Portfolio() {

    const sectionTitle = "PORTFOLIO";
    const sectionSubTitle = "View My Recent Projects";

    return (
        <div id="portfolio" className="basic-container">
            <div className="portfolio-section">
                <h1>{sectionTitle}</h1>
                <p>{sectionSubTitle}</p>
                <hr/>
                <div className="flex-wrapped">

                </div>
            </div>
        </div>
    );

}

export default Portfolio;