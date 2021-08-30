import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ApplyCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "center" }}>
              ECESS is constantly looking for new applicants. If you are interested,
              please fill out the interest form below or scan the QR code provided.
              Committees are detailed in the Committees page of the Website. Thank you! 
            </p>
            <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdJiB-CY9fsSLUF1b204HNTQDN59xNzK5JYUp2Z7KxtybsWGg/viewform" target="_blank">
                    <BiLinkExternal /> &nbsp;
                    {"Apply Here!"}
              </Button>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default ApplyCard;