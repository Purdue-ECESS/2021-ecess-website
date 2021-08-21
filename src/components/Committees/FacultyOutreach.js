import React from "react";
import Card from "react-bootstrap/Card";

function FacultyOutreach() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="yellow">Faculty Outreach</strong>
          </h1>
          <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Head: Andrew Lake</strong>
          </h1>
          <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
            <strong className="yellow">Email: lake14@purdue.edu</strong>
          </h1>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              The Faculty Outreach Committee of ECESS endeavors to
              connect Purdue ECE students and faculty beyond the
              classroom through fun and informative activities based
              around the seven research areas of ECE: Automatic Control,
              Communications & Networking & Signal/Image Processing,
              Computer Engineering, Fields and optics, Microelectronics
              and Nanotechnology, Schweitzer Power and Energy Systems,
              and VLSI / Circuit Design.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default FacultyOutreach;