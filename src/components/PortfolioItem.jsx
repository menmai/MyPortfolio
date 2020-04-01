import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PortfolioItem(props) {
    return (
        <div className="portfolio-card">
            <Card>
                <div className="card-img">
                    <Card.Img variant="top" src={props.image}/>
                </div>
                <Card.Body style={{paddingTop: "4%"}}>
                    <Card.Title style={{marginBottom: "1%"}}>{props.title}</Card.Title>
                    <Card.Text style={{marginBottom: "4%"}}>{props.description}</Card.Text>
                    <Card.Text style={{fontSize:"90%", color:"grey", marginBottom: "4%"}}>{props.tech}</Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PortfolioItem;                  
