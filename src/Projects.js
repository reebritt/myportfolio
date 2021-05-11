import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Activesis from "../src/assets/Activesis.png";
import NoteTaker from "../src/assets/NoteTaker.png";
import Budgegrub from "../src/assets/Budgegrub.png";
import Workday from "../src/assets/Workday.png";
import Password from "../src/assets/Password.png";
import Quizgame from "../src/assets/Quizgame.png";
import './App.css';

function Projects(props) {
    return (
        <Fragment>

            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Img variant="top" src={Activesis} />
                <Card.Body>
                    <Card.Title><a href="https://fathomless-plains-61615.herokuapp.com">Active SisHer</a></Card.Title>
                    <Card.Text>
                        Empowering and mindful space where women can create activity groups such as rollerblading, biking, basketball, etc and meetup
                    </Card.Text>
                    
                </Card.Body>
            </Card>

            <CardDeck>
            
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Password} />
                    <Card.Body>
                        <Card.Title><a href="https://reebritt.github.io/password-generator/">Password Generator</a></Card.Title>
                    </Card.Body>
                </Card>

                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Workday} />
                    <Card.Body>
                        <Card.Title> <a href="https://reebritt.github.io/Work-Day-Scheduler">Workday Scheduler</a></Card.Title>
                    </Card.Body>
                </Card>

                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={NoteTaker} />
                    <Card.Body>
                        <Card.Title> <a href="https://fathomless-plains-61615.herokuapp.com">Note Taker</a></Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <CardDeck>
                
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Quizgame} />
                    <Card.Body>
                        <Card.Title> <a href="https://reebritt.github.io/Quiz-Game-/">Quiz Game</a></Card.Title>
                    </Card.Body>
                </Card>
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Budgegrub} />
                    <Card.Body>
                        <Card.Title><a href="https://budgegrub.github.io/Budgegrub/">BudgeGrub</a></Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>


        </Fragment>
    )
}

export default Projects;