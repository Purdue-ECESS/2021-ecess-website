import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CommitteeCard(props) {
    const {link, name} = props;
    return (
        <Card className="quote-card-view">
        <Card.Body>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="yellow">
                    {name}
                </strong>
            </h1>
            <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                <strong className="yellow">Head: {props.head}</strong>
            </h1>
            <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                <strong className="yellow">Email: {props.email}</strong>
            </h1>
            {link ?
                <Button variant="primary" href={link} target="_blank">
                    {"Website"}
                </Button> : <></>
            }
            <blockquote className="blockquote mb-0" style={{marginTop: 10}}>
                <p style={{ textAlign: "center" }}>
                {props.description}
                </p>
            </blockquote>
        </Card.Body>
    </Card>
    );
}
export default CommitteeCard;
