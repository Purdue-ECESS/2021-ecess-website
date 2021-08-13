import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/ecess-logo.svg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Are We?
            </h1>
            <p className="home-about-body">
            The purpose of the <b className="yellow">Electrical and Computer Engineering Student Society</b> is to provide ECE 
            students with an educational and professional community aimed at preparing students for a 
            rigorous academic program, exploring educational and professional post-baccalaureate options 
            and making the most out of their Purdue Experience.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={logo} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ecesspurdue"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/purdue_ecess/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
