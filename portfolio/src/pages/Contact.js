import React from 'react';
import { Card } from 'react-bootstrap';

function Contact() {
    return (
        <div id="contact">
            <Card>
                <Card.Body><a href="https://www.linkedin.com/in/kirby-reese-9aa3411b2/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/kirbycreese"><i className="fab fa-github-square"></i></a>
                    <a href="gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="placeholder.com"><i className="fas fa-file"></i></a></Card.Body>
            </Card>
            
        </div>
    )
}

export default Contact
