import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacultyOutreach from "./FacultyOutreach"
import CommunityOutreach from "./CommunityOutreach"
import WebDev from "./WebDev"
import ECEA from "./ECEA"
import Particle from "../Particle";

function Committee() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
            <strong className="yellow">Committees</strong>
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
            <FacultyOutreach />
            <WebDev />
            <ECEA />
            <CommunityOutreach />
            {/* TODO: Add other committees cards here */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Committee;
