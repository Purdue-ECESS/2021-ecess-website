import React from "react";
import Card from "react-bootstrap/Card";

function Publicity() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="yellow">Publicity</strong>
          </h1>
          <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Head: Alyssa DeLouise</strong>
          </h1>
          <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Email: adelouis@purdue.edu</strong>
          </h1>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
            The Publicity Committee works on all things social - including social media, 
            flyers, and getting people to events. This committee helps spread the word 
            about ECESS, do outreach, and answer questions.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default Publicity;