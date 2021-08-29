import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ecessLogo1 from "../../Assets/ecess-logo-1.png";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">

          <Row>
              <Col className="home-header">
                <div style={{ padding: 1, textAlign: "center" }}>
                  <Type />
                </div>
                {/* <p className="home-about-body">
                The purpose of the <b className="yellow">Electrical and Computer Engineering Student Society</b> is to provide ECE
                students with an educational and professional community aimed at preparing students for a
                rigorous academic program, exploring educational and professional post-baccalaureate options
                and making the most out of their Purdue Experience.
              </p> */}
              
              </Col>

          </Row>

          <Card className="quote-card-view">
            <Card.Body>
              <img src={ecessLogo1} alt="home pic" className="img-fluid" />
            </Card.Body>
          </Card>



          </Container>
        </Container>
      </section>
  );
}

export default Home;
