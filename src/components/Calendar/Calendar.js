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
            </Container>
            <Container>
                <div class="responsiveCal">
                    <iframe src={"https://calendar.google.com/calendar/embed?src=lffgqv326096a6s1hnl136gtd4%40group.calendar.google.com&ctz=America%2FIndiana%2FIndianapolis"}
                            scrolling="yes" title="ECESS Calendar"/>
                </div>
            </Container>
        </Container>
    );
}

export default CalendarPage;