import React from "react";
import './Navigation.css';
import logo from '../images/logo.png';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar expand="sm" className="bg-white" >
                <Container fluid id="nav-container">
                    <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                     </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler"  id="hide-toggler" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px'}}
                        navbarScroll
                        id="navigation-bar"
                    >   <LinkContainer to="/">
                            <Nav.Link className="mx-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link className="mx-3">Users</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/schedule">
                            <Nav.Link className="mx-3">Schedule</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="mx-3" >Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;