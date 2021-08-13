import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCard";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

function Board() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="yellow">Executive</strong> Board
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <BoardCard
              imgPath={chatify}
              isBlog={false}
              title="Naveen Vivek"
              major="Major: EE, Spring 2022"
              quote="Quote: Hi everyone!"
              fav_class="Favorite Class: ECE 270"
              linkedin="http://linkedin.com/in/naveen-vivek/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BoardCard
              imgPath={chatify}
              isBlog={false}
              title="Naveen Vivek"
              major="Major: EE, Spring 2022"
              quote="Quote: Hi everyone!"
              fav_class="Favorite Class: ECE 270"
              linkin="http://linkedin.com/in/naveen-vivek/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BoardCard
              imgPath={chatify}
              isBlog={false}
              title="Naveen Vivek"
              major="Major: EE, Spring 2022"
              quote="Quote: Hi everyone!"
              fav_class="Favorite Class: ECE 270"
              linkin="http://linkedin.com/in/naveen-vivek/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BoardCard
              imgPath={chatify}
              isBlog={false}
              title="Naveen Vivek"
              major="Major: EE, Spring 2022"
              quote="Quote: Hi everyone!"
              fav_class="Favorite Class: ECE 270"
              linkin="http://linkedin.com/in/naveen-vivek/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Board;
