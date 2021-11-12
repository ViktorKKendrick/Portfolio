import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Social() {
    return (
        <Container className='text-center'>

            <Row className='text-center'>
                {/* <Col className='col-lg-3 text-center'/> */}
                <Col className='col-lg-12 text-center'>
                    <Image src='./Img/Myself.png' className='' />
                </Col>
                {/* <Col className='col-lg-3'/> */}
            </Row>
            <h1>Socials:</h1>
            <Row>
                <Col className='col-sm-3 md-auto d-flex align-items-center justify-content-center'>
                    <a className='nav-link' href='https://github.com/ViktorKKendrick'>
                        <img src="./Img/GithubPNG.png" alt="GitHub" height="70px" />
                    </a>
                </Col>
                <Col className='col-sm-3 md-auto d-flex align-items-center justify-content-center'>
                    <a className='nav-link' href='mailto:viktor.kendrick@gmail.com'>
                        <img src="./Img/Mail.png" alt="Email" height="70px" />
                    </a>
                </Col>
                <Col className='col-sm-3 md-auto d-flex align-items-center justify-content-center'>
                    <a className='nav-link' href='https://www.instagram.com/wasabi.64/'>
                        <img src="./Img/IG.png" alt="Instagram" height="70px" />
                    </a>
                </Col>
                <Col className='col-sm-3 md-auto d-flex align-items-center justify-content-center'>
                    <a className='nav-link' href='https://www.linkedin.com/in/kole-kendrick-4b0071225/'>
                        <img src="./Img/LinkedIn1.jpg" alt="LinkedIN" height="70px" />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

