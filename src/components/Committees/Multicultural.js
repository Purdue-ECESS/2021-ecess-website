import React from "react";
import Card from "react-bootstrap/Card";

function Multicultural() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="yellow">Multicultural</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Head: Minh Tran</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Email: tran142@purdue.edu</strong>
                </h1>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Placeholder Description.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Multicultural;