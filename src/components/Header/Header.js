import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid>
            <Container>
                <Navbar expand="lg" className="fixed">
                    <Navbar.Brand><Link to="/home"><img src="https://iili.io/2VACFV.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="navLink font-weight-bold">Home</Link>
                            <Link to="/" className=" navLink font-weight-bold">Donation</Link>
                            <Link to="/" className="navLink font-weight-bold">Events</Link>
                            <Link to="/" className="navLink font-weight-bold">Blog</Link>
                            <button className="navLink btn btn-primary pr-4 pl-4">Register</button>
                            <button className="navLink btn btn-dark pr-4 pl-4">Admin</button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
};

export default Header;