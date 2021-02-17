import React from 'react';
import './Navbar.css'
import logo from '../../creative-agency-main/images/logos/logo.png'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = ({loginUser}) => {
    return (
        <Container>
        <Navbar expand="lg">
        <Navbar.Brand href="#">
            <img src={logo} alt="" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
                <Nav.Link className="mr-3 active" href="#home">Home</Nav.Link>
                <Nav.Link className="mr-3" href="#ourPortfolio">Our portfolio</Nav.Link>
                <Nav.Link className="mr-3" href="#ourTeam">Our team</Nav.Link>
                <Nav.Link className="mr-3" href="#contactUs">Contact Us</Nav.Link>
                {
                    loginUser.name ? <strong className='mt-2'>{loginUser.name}</strong> :
                    <Link to="/login" style={{textDecoration:"inherit", color:"inherit"}}>
                        <button className="btn-brand">Login</button>
                    </Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default NavBar;