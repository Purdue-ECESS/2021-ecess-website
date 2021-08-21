import React from "react";
import Card from "react-bootstrap/Card";

function Social() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="yellow">Social</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Head: Sam Dlott</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Email: sdlott@purdue.edu</strong>
                </h1>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                    The social committee is responsible for events for ECESS members and 
                    ECE students to connect, socialize, and develop.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Social;