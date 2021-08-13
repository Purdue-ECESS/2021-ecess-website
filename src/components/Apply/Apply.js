import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplyCard from "./ApplyCard";
import Particle from "../Particle";

function Apply() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
            <strong className="yellow">Application</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <ApplyCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Apply;
