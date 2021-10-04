import React from "react";
import Card from "react-bootstrap/Card";

function CommitteeCard2(props) {
    return (
        <Card className="project-card-view">
            <Card.Body>
                
                <Card.Title>
                    <strong className="yellow">
                        {props.name}
                    </strong>
                </Card.Title>

                <Card.Text style={{ textAlign: "center" }}>
                    <strong className="yellow">
                        Head: {props.head} <br />
                        Contact: <a href="mailto:{props.contact}"> {props.email}</a>
                    </strong>
                </Card.Text>

                <Card.Text style={{ textAlign: "center" }}>
                    {props.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}
export default CommitteeCard2;
