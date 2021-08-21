import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";
import Particle from "../Particle";

function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
                    <strong className="yellow">Contact Us</strong>
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
                        <ContactCard />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
