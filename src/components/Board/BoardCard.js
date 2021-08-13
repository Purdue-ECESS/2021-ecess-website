import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function BoardCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.major}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.quote}
        </Card.Text>
        <Button variant="primary" href={props.linkedin} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"LinkedIn"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default BoardCard;
