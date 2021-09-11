import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function BoardCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} width="75%" />
            <Card.Body>
                <Card.Title>
                    <strong className="yellow">
                        {props.name}
                    </strong>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    <strong className="yellow">
                        {props.title}
                    </strong>
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                    Contact: <a href="mailto:{props.contact}"> {props.contact}</a>
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                    Major: {props.major}
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                    Hometown: {props.hometown}
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                    Favorite Class: {props.fav_class}
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                    Quote: "{props.quote}"
                </Card.Text>
            </Card.Body>
            <Button variant="primary" href={props.linkedin} target="_blank">
                <BiLinkExternal /> &nbsp;
                    {"LinkedIn"}
                </Button>
        </Card>
    );
}
export default BoardCard;
