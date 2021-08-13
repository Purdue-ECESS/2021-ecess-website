import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function CalendarPage() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
            <strong className="yellow">Calendar</strong>
        </h1>
        {/* TODO: Insert calendar here! */}
      </Container>
        <Container>
        <div>
            <iframe src={"https://calendar.google.com/calendar/embed?src=bg4e1frm2kqlieki1q1tr5j1kg%40group.calendar.google.com&ctz=America%2FChicago"}
                    style={{width: '100%', height: '100vh'}}/>
        </div>
        </Container>
    </Container>
  );
}

export default CalendarPage;