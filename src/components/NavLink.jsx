import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavLink(content, link) {

    return (
        <Nav.Link href={link}>
            <div className="navtext">
                {content}
            </div>
        </Nav.Link>
    );
    
}

export default NavLink;
