import React from "react";
import Card from "react-bootstrap/Card";

function ECEA() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="yellow">ECE Ambassadors</strong>
        </h1>
        <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Head: Sara Hui</strong>
        </h1>
        <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Email: hui12@purdue.edu</strong>
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

export default ECEA;