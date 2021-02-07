import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';




function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Connect</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
