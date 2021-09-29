import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ecessLogo1 from "../../Assets/ecess-logo-1.png";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
      <section>
        <Container className="home-section" id="home">
          <Particle />
          <Row>
              <Col className="home-header" style = {{textAlign: "center"}}>
                  <Type style = {{width: "100%"}}/>
              </Col>
          </Row>

          <Card className="quote-card-view">
            <Card.Body>
              <img src={ecessLogo1} alt="home pic" className="img-fluid" />
            </Card.Body>
          </Card>
        </Container>

        <Card className="quote-card-view">
          <Card.Body>
            <div style={{ padding: 1, textAlign: "center" }}>
            Email: <a class="nobubble" href="mailto:vivek@purdue.edu">ecess@purdue.edu</a> <br/>
            Address: EE 232, 475 Northwestern Avenue, West Lafayette IN - 47907
          </div>
          </Card.Body>
        </Card>

      </section>
  );
}

export default Home;