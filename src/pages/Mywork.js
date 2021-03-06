import React from "react";
import "./Mywork.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Photo from "./portfolioshotcropped.jpg";

function Mywork() {
  return (
    <div id="mywork">
      <Container className="main">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={Photo} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Photo} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Photo} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Mywork;

//link to wanderplus https://github.com/kirbycreese/WANDER-PLUS
//link to fitnesstracker https://nameless-ridge-48652.herokuapp.com/
//link to codecarnival https://code-carnival.herokuapp.com/