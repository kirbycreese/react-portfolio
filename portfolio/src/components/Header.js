import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';




function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Kirby Reese</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="About.js">About Me</Nav.Link>
                <Nav.Link href="#features">My Work</Nav.Link>
                <Nav.Link href="#contact">Connect With Me</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
