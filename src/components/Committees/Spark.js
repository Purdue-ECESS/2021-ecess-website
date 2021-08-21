import React from "react";
import Card from "react-bootstrap/Card";

function Spark() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="yellow">Spark Challenge</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Head: Altay Atik</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Email: aatik@purdue.edu</strong>
                </h1>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        The Spark Challenge Committee is responsible for planning and 
                        moderating the semi-annual senior design project competition Spark 
                        Challenge.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Spark;