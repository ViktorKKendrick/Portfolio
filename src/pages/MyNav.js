import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default function MyNav() {
    return (
        <div>
            <Container className='container'>
                <Navbar className='container' bg="success" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' activeClassName={'active'} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-white' activeClassName={'active'} as={Link} to="/Social">Social</Nav.Link>
                            <Nav.Link className='text-white' activeClassName={'active'} as={Link} to="/Projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}