import React from "react";
import Card from "react-bootstrap/Card";

function ContactCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Want to get in touch with ECESS? Please send an email to ecess@purdue.edu. Thank you! 
              <br/> <br/>
              Address: <br/>
              EE 232, <br/>
              475 Northwestern Avenue, <br/>
              West Lafayette IN - 47907
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default ContactCard;