import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import WhiteSpace from '../Components/WhiteSpace';

import 'bootstrap/dist/css/bootstrap.css';
export default function SplashPage() {
    return (
        <>
            <Container className='container-fluid bg-light'>
                <Row>
                    <WhiteSpace />
                    <h3 className="text-center">About Me!</h3>
                    <Col className='col-lg-5 text-center mb-5 mb-lg-0'>
                        <h1>Education</h1>
                        <p>Graduated from Boyle County High School. Taking many provided courses, such as AP Computer Science, AP Chemistry, and AP Physics. Also took additional courses: Java, Python, and Project Based Programming</p>
                        <p>Took a course at Awesome Inc U in 2016 Learning C-Sharp, and the FullStack Developer Bootcamp in 2021</p>
                    </Col>
                    <Col className='col-lg-2 text-center mb-5 mb-lg-0'>
                        <WhiteSpace />
                    </Col>
                    <Col className='col-lg-5 text-center mb-5 mb-lg-0'>
                        <h1>Work Experience</h1>
                        <p>In 2019, I worked at Mcdonalds as a Crew Member an soon after a Crew Trainer. In 2020-2021 I was offered to become a Manager, for certain reasons, that had to be postponed, but I did get to train to become a Manager. So for roughly 6 months I was training to be a Manager by learning every position in the store and getting used to customer interactions.</p>
                        <p>Aswell as being efficient in working as a team with co-workers I didn't usually work with. I had to put my two weeks notice in due to having to attend the Bootcamp at Awesome Inc U.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}