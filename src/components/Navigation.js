import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import logo from '../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className="nav-container">
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            // width="30"
                            // height="30"
                            className="d-inline-block align-top"
                            alt="Loadsharing logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Link to="/">Home</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/schedule">Schedule</Link>
                        <Link to="/contact">Contact</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    );
}

export default Navigation;