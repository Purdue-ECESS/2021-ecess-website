import React from "react";
import Card from "react-bootstrap/Card";

function WebDev() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="yellow">Website Manager</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Head: Naveen Vivek</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Email: vivek@purdue.edu</strong>
                </h1>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        The Website Manager Committee updates the
                        ECESS website with announcements and new
                        information regarding
                        the ECESS committees.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default WebDev;