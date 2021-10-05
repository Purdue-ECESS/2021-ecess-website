import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommitteeCard from "./CommitteeCard";
import Particle from "../Particle";

function Committee() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
        <h1 style={{ fontSize: "4em", paddingBottom: "10px" }}>
            <strong className="yellow">Committees</strong>
        </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
      
          <Col md={4} className="project-card">
            <CommitteeCard
                name="Community Outreach"
                head="Amita Pandey"
                email="pandey26@purdue.edu"
                description="
                The Community Outreach committee helps introduce ECE and general engineering concepts 
                to kids in elementary, middle, and high schools. This includes preparing fun projects
                for local kids in the community. The committee also organizes volunteering opportunities
                in West Lafayette.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="ECE Ambassadors"
                head="Sara Hui"
                email="hui12@purdue.edu"
                link={"https://www.purdue-ecess.org/ecea"}
                description="
                Ambassadors answer questions from prospective students and families by giving tours 
                and presentations to incoming students. They also help T2M students make the correct 
                decision for which engineering they choose by giving insight to what ECE is and what 
                they have learned.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Faculty Outreach"
                head="Andrew Lake"
                email="lake14@purdue.edu"
                description="
                The Faculty Outreach Committee of ECESS endeavors to
                connect Purdue ECE students and faculty beyond the
                classroom through fun and informative activities based
                around the research areas of ECE.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Multicultural Affairs"
                head="Claire Poukey"
                email="cpoukey@purdue.edu"
                description="
                The Multicultural Affairs Committee strives to create an inclusive environment for ECE 
                students of all backgrounds, cultures, and identities. We promote instersctional awareness 
                and empower students through cultural and social events as well as professional development 
                opportunities.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Publicity"
                head="Alyssa DeLouise"
                email="adelouis@purdue.edu"
                description="
                The Publicity Committee works on all things social - including social media, 
                flyers, and getting people to events. This committee helps spread the word 
                about ECESS, do outreach, and answer questions.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Social"
                head="Jack Brewer"
                email="brewe116@purdue.edu"
                description="
                The social committee is responsible for events for ECESS members and 
                ECE students to connect, socialize, and develop.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Spark Challenge"
                head="Altay Atik"
                email="aatik@purdue.edu"
                link={"https://www.purdue-ecess.org/spark"}
                description="
                The Spark Challenge Committee is responsible for planning and 
                moderating the semi-annual senior design project competition Spark 
                Challenge.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Website Development"
                head="Naveen Vivek"
                email="vivek@purdue.edu"
                description="
                The Website Development Committee updates the ECESS website 
                with announcements and new information regarding
                the ECESS committees.
                "
            />
          </Col>

          <Col md={4} className="project-card">
            <CommitteeCard
                name="Women in ECE"
                head="Sam Unger"
                email="unger12@purdue.edu"
                link={"https://purduewece5.wixsite.com/purduewece"}
                description="
                WECE is a committee aimed at connecting women majoring in ECE. We 
                have social and outreach events aimed at promoting friendship and 
                making connections in the West Lafayette/ Greater Lafayette area. 
                "
            />
          </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Committee;