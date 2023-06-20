import React from 'react';
import './Home.css';
import hero from '../images/hero.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <Container  className="text-center" id="home-container" fluid>
            <Row className="justify-content-center d-flex align-items-center">
            <Col xs={12} lg={{ order: 'last', span: 6 }} className="my-4 text-end"><Image src={hero} alt="people collaborating with laptop and book" fluid /></Col>
            <Col lg={{ order:'first', span: 6 }} xs={12} className="justify-content-start text-start" id="hero-container" >
                <h1 className="text-center" id="home-heading">Collaborate during Loadshedding.</h1>
                <p className="my-4 text-center">Save time arranging Meetings and events for a team during loadshedding. see multiple shedding schedules in one view.Send an instant message to the team.</p>
                <div className="text-center">
                    <Button variant="primary" href="/users" id="button-add">Add User</Button> {' '}
                    <Button variant="outline-primary" id="button-schedule">See Schedule</Button>{' '}
                </div>
            </Col>
        </Row>
      </Container>
           );
}

export default Home;