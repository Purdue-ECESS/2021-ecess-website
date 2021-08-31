import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function NewsletterPage() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
                    <strong className="yellow">Newsletter</strong>
                </h1>
            </Container>
            <Container>
                <div>
                <iframe width="100%" height="900" src={"https://www.smore.com/cgqhs-call-out-for-ecess?embed=1"}
                            scrolling="yes" title="ECESS Newsletter"/>
                </div>
            </Container>
        </Container>
    );
}

export default NewsletterPage;