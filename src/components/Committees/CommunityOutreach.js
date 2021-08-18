import React from "react";
import Card from "react-bootstrap/Card";

function CommunityOutreach() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="yellow">Community Outreach</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Head: Amita Pandey</strong>
                </h1>
                <h1 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="yellow">Email: pandey26@purdue.edu</strong>
                </h1>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Placeholder Description.
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default CommunityOutreach;