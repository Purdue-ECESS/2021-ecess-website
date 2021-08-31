import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplyCard from "./ApplyCard";
import Particle from "../Particle";

function Apply() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "4em", paddingBottom: "0px" }}>
                    <strong className="yellow">Interest Form</strong>
                </h1>
                <Row style={{ justifyContent: "center", padding: "0px" }}>
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
