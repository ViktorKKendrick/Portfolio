import React from 'react'
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default function MyFooter() {
    return (
        <div className='container'>
            <footer className="footer">
                <Row>
                    <Col className='col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                    </Col>
                    <Col className='col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='https://www.codewars.com/users/ViktorKKendrick'>
                            <img src="./Img/CW.png" alt="CodeWars" height="30px"/>
                        </a>
                    </Col>
                    <Col className='col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='https://github.com/ViktorKKendrick'>
                            <img src="./Img/GithubPNG.png" alt="GitHub" height="30px"/>
                        </a>
                    </Col>
                    <Col className='col-lg-6 text-center mb-8 mb-lg-1 d-flex align-items-center justify-content-center'>
                        <p className='text-center'>©2021 Viktor K. Kendrick. All Rights Reserved.</p>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}