import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Github from "../src/assets/Github.png";
import Linkedin from "../src/assets/Linkedin.png";
import Email from "../src/assets/Email.jpeg";

function Contact(props) {
  return (
    <Fragment>
      <CardGroup>

        <Card border="success" style={{ width: '12rem' }}>
          <Card.Img variant="top" src={Linkedin} />
          <Card.Body>
            <Card.Title><a href="https://www.linkedin.com/in/sheree-britt-357b41b4/">LinkedIn</a></Card.Title>
          </Card.Body>
        </Card>

        <Card border="success" style={{ width: '12rem' }}>
          <Card.Img variant="top" src={Email} />
          <Card.Body>
            <Card.Title>Contact me at reebritt@icloud.com</Card.Title>
          </Card.Body>
        </Card>
        
        <Card border="success" style={{ width: '12rem' }}>
          <Card.Img variant="top" src={Github} />
          <Card.Body>
            <Card.Title><a href="https://github.com/reebritt">Github</a></Card.Title>
          </Card.Body>
        </Card>

      </CardGroup>
    </Fragment>
  )
}

export default Contact;