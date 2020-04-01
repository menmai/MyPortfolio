import React from 'react';
import visSort from '../assets/vis-sort.png';
import PortfolioItem from './PortfolioItem';

function Portfolio() {

    const sectionTitle = "PORTFOLIO";
    const sectionSubTitle = "View My Recent Projects";

    return (
        <div id="portfolio" className="basic-container">
            <div className="portfolio-section">
                <h1>{sectionTitle}</h1>
                <p>{sectionSubTitle}</p>
                <hr/>
                <div className="flex-wrapped2">
                    <PortfolioItem 
                        title="Vis-Sort" 
                        description="Visualization of sorting algorithms." 
                        tech="React, HTML, CSS, JavaScript, BootStrap"
                        image={visSort}
                    />
                </div>
            </div>
        </div>
    );

}

export default Portfolio;