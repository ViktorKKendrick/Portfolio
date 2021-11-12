import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function Projects() {
    return (
        <Container className='text-center'>
            <h1>Projects</h1>
            <Row className='d-flex text-center align-items-center justify-content-center'>
                <Col className='col-lg-3 text-center mb-5 mb-lg-0'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./Img/TicTacToe.png" />
                        <Card.Body>
                            <Card.Title>TicTacToe Project</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='https://viktorkkendrick.github.io/TicTacToe/'>Live Project Site</Button>
                            <Button variant="muted" href='https://github.com/ViktorKKendrick/TicTacToe'>Github Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-1' />
                <Col className='col-lg-3 text-center mb-5 mb-lg-0'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./Img/WeatherApp.png" />
                        <Card.Body>
                            <Card.Title>Weather App Project</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='https://viktorkkendrick.github.io/WeatherApp/'>Live Project Site</Button>
                            <Button variant="muted" href='https://github.com/ViktorKKendrick/WeatherApp'>Github Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-1' />
                <Col className='col-lg-3 text-center mb-5 mb-lg-0'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./Img/MindReader.png" />
                        <Card.Body>
                            <Card.Title>Mind Reader App</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='https://viktorkkendrick.github.io/Mindgame/'>Live Project Site</Button>
                            <Button variant="muted" href='https://github.com/ViktorKKendrick/Mindgame'>Github Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}