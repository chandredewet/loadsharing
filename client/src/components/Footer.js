import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {

  return (
    <Container fluid id="footer-location" >
      <Row className=" justify-content-lg-end justify-content-center">
        <Col lg="auto" xs={12} className="text-lg-right text-center">
          <small>&copy; Copyright 2023, Chandré De Wet</small>
        </Col>
        <Col lg="auto" xs={12} className="text-lg-right text-center" id="social-media">
          <ul className="list-inline" >
            <li className="list-inline-item"><SocialIcon url="https://www.linkedin.com/in/chandredewet" bgColor="#000000" style={{ height: 25, width: 25 }}/></li>
            <li className="list-inline-item">    <SocialIcon url="https://github.com/chandredewet" bgColor="#000000" style={{ height: 25, width: 25 }}/></li>
            <li className="list-inline-item"><SocialIcon url="mailto:chandredewet@gmail.com" bgColor="#000000" style={{ height: 25, width: 25 }}/></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;