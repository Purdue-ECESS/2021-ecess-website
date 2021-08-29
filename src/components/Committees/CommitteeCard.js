import React from "react";
import Card from "react-bootstrap/Card";

function CommitteeCard(props) {
    return (
        <Card className="quote-card-view">
        <Card.Body>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="yellow">{props.name}</strong>
            </h1>
            <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                <strong className="yellow">Head: {props.head}</strong>
            </h1>
            <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                <strong className="yellow">Email: {props.email}</strong>
            </h1>
            <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                {props.description}
                </p>
            </blockquote>
        </Card.Body>
    </Card>
    );
}
export default CommitteeCard;
