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
              <Col className="home-header" style = {{alignContent: "center"}}>
                  <Type style = {{width: "100%"}}/>
              </Col>

          </Row>

          <Card className="quote-card-view">
            <Card.Body>
              <img src={ecessLogo1} alt="home pic" className="img-fluid" />
            </Card.Body>
          </Card>

          <div style={{ padding: 1, textAlign: "center" }}>
            <p>
            Email: ecess@purdue.edu <br/>
           
            Address: EE 232, 475 Northwestern Avenue, West Lafayette IN - 47907
            </p>
          </div>
              
          </Container>
        </Container>
      </section>
  );
}

export default Home;
