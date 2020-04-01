import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from '../assets/profile.png';

function PortfolioItem(props) {
    return (
        <div className="portfolio-card">
            <Card>
                <div className="card-img">
                    <Card.Img variant="top" src={profile}/>
                </div>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text style={{fontSize:"90%", color:"grey"}}>{props.tech}</Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PortfolioItem;                  
