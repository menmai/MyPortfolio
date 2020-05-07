import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink';
import Nav from 'react-bootstrap/Nav';

import logo from '../assets/logo.png';

function Navigation() {

    return(
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {NavLink("Home", "#home")}
                    {NavLink("About", "#about")}
                    {NavLink("Portfolio", "#portfolio")}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
