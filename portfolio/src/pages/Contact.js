import React from 'react';
import { Card } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <Card>
                <Card.Body><a href="linkedin.com"><i className="fab fa-linkedin"></i></a>
                    <a href="github.com"><i className="fab fa-github-square"></i></a>
                    <a href="gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="placeholder.com"><i className="fas fa-file"></i></a></Card.Body>
            </Card>
            
        </div>
    )
}

export default Contact
