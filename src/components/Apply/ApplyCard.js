import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ApplyCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ECESS is constantly looking for new applicants. If you are interested,
            please apply using the link below or scan the QR code provided. Additionally,
            a list of committees are provided below. Thank you!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ApplyCard;