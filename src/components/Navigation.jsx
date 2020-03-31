import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png'


function Navigation() {
    return(
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />       
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home"><div className="navtext">Home</div></Nav.Link>
                    <Nav.Link href="#about"><div className="navtext">About</div></Nav.Link>
                    <Nav.Link href="#portfolio"><div className="navtext">Portfolio</div></Nav.Link>
                    <Nav.Link href="#contact"><div className="navtext">Contact</div></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;