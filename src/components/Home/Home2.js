import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ecessLogo2 from "../../Assets/ecess-logo-2.png";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row style={{ justifyContent: "justify"}}>
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
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;
