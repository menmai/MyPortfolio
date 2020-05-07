import React from 'react';
import visSort from '../assets/vis-sort.png';
import cityTour from '../assets/cityTour.png';
import htmWeather from '../assets/HTMWeather.png';
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
                        title="HTMWeather"
                        description="Get live weather data by city."
                        tech="HTML, CSS, JavaScript, API, Express, EJS, Node"
                        image={htmWeather}
                        link="https://sleepy-basin-48890.herokuapp.com/"
                    />
                    <PortfolioItem
                        title="cityTour"
                        description="Single page website for generic app."
                        tech="HTML, CSS, BootStrap"
                        image={cityTour}
                        link="https://menmai.github.io/cityTour/"
                    />
                    <PortfolioItem
                        title="Vis-Sort"
                        description="Visualization of sorting algorithms."
                        tech="React, HTML, CSS, JavaScript, BootStrap"
                        image={visSort}
                        link="https://menmai.github.io/VisSort/"
                    />
                </div>
            </div>
        </div>
    );

}

export default Portfolio;
