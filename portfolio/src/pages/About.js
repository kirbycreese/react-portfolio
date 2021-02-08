import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function About() {
    return (
        <div>
            <Container>
            <Card>
            <Card.Body>

            <div className="container1">   
            <div className="container2"></div>
                    <h1>Header will go here</h1>
                    <p>all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around,
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around, 
                        all this text will wrap around, all this text will wrap around,</p>
            
            </div>

            </Card.Body>
            </Card>
            
            
        </Container>
        </div>
    )
}

export default About

