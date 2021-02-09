import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div id="aboutme">
      <Container className="whole">
        <Card>
          <Card.Body>
            <div className="container1">
              <div className="container2"></div>
              <h1>Header will go here</h1>
              <p>
                Hello my name is Kirby and i am a full Stack Web Developer and
                soon to be graduate of the full stack coding bootcamp at UNC
                where I learned database theory, agile methodology, and how to
                code a variety of applications using the MERN stack. Coming from
                a background as a self-employed business owner and later moving
                to be part of a 100+ person team, I not only have the motivation
                to self-start, but also the skills to thrive in a collaborative
                environment. I have a strong passion for mastering new skills
                and I am{" "}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;
