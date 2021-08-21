import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCard";
import Particle from "../Particle";

import Alyssa from "../../Assets/BoardPics/Alyssa_DeLouise.jpeg";
import Naveen from "../../Assets/BoardPics/Naveen_Vivek.jpeg";
import Ryan from "../../Assets/BoardPics/Ryan_Villarreal.jpeg";
import Altay from "../../Assets/BoardPics/Altay_Atik.jpeg";
import Andrew from "../../Assets/BoardPics/Andrew_Lake.jpeg";
import Sam from "../../Assets/BoardPics/Sam_Dlott.jpeg"
import Alexandra from "../../Assets/BoardPics/Alexandra_Sichterman.jpeg"
import Amita from "../../Assets/BoardPics/Amita_Pandey.jpeg"
import Denae from "../../Assets/BoardPics/Denae_Galloway.jpeg"
import Sara from "../../Assets/BoardPics/Sara_Hui.jpeg"

import Sam2 from "../../Assets/BoardPics/Samantha_Unger.jpeg"
// import LeighAnn from "../../Assets/BoardPics/Sam_Dlott.jpeg"
// import Giselle from "../../Assets/BoardPics/Sam_Dlott.jpeg"

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
                  imgPath={Ryan}
                  isBlog={false}
                  name="Ryan Villarreal"
                  title="President"
                  major="CompE, Brain & Behavior Sciences, Spring 2022"
                  hometown="Oswego, IL"
                  quote="The risk I took was calculated, but man, am I bad at math."
                  fav_class="ECE 36200"
                  linkedin="https://www.linkedin.com/in/ryan-villarreal/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Denae}
                  isBlog={false}
                  name="Denae Galloway"
                  title="Vice President"
                  major="EE, Spring 2023"
                  hometown="TBD"
                  quote="TBD"
                  fav_class="TBD"
                  linkedin="https://www.linkedin.com/in/denae-galloway/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Alexandra}
                  isBlog={false}
                  name="Alexandra E. Sichterman"
                  title="Secretary & Treasurer"
                  major="Major: CompE, Spring 2022"
                  hometown="Muscatine, IA"
                  quote="There are night owls and there are early birds, but I am a permanently exhausted pigeon."
                  fav_class="ECE 36200"
                  linkedin="http://linkedin.com/in/naveen-vivek/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Alyssa}
                  isBlog={false}
                  name="Alyssa DeLouise"
                  title="Publicity - Chair"
                  major="EE, Fall 2022"
                  hometown="Old Bridge, NJ"
                  quote="Let courage carry you."
                  fav_class="ECE 27000"
                  linkedin="https://www.linkedin.com/in/alyssadelouise/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Naveen}
                  isBlog={false}
                  name="Naveen Vivek"
                  title="Website Development - Chair"
                  major="EE, Spring 2022"
                  hometown="Chennai, India"
                  quote="Quotes are overrated."
                  fav_class="ECE 27000"
                  linkedin="http://linkedin.com/in/naveen-vivek/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Andrew}
                  isBlog={false}
                  name="Andrew Lake"
                  title="Faculty Outreach - Chair"
                  major="EE, Spring 2022"
                  hometown="Flint, Michigan"
                  quote="Don't force it, just get a bigger hammer."
                  fav_class="ECE 30500"
                  linkedin="https://www.linkedin.com/in/andrewlake2000/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Altay}
                  isBlog={false}
                  name="Altay Atik"
                  title="Spark Challenge - Chair"
                  major="EE, Spring 2023"
                  hometown="Istanbul, Turkey"
                  quote="Simple can be harder than complex."
                  fav_class="ECE 27000"
                  linkedin="https://www.linkedin.com/in/altayaskinatik/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Sam}
                  isBlog={false}
                  name="Sam Dlott"
                  title="Social Committee - Chair"
                  major="CompE, Spring 2023"
                  hometown="Plano, TX"
                  quote="Always ready to give it 100%."
                  fav_class="ECE 20875"
                  linkedin="https://www.linkedin.com/in/sdlott/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Sara}
                  isBlog={false}
                  name="Sara Hui"
                  title="ECE Ambassadors - Chair"
                  major="EE, Spring 2022"
                  hometown="Honolulu, HI"
                  quote="TBD"
                  fav_class="TBD"
                  linkedin="https://www.linkedin.com/in/sara-hui-purdue/"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Amita}
                  isBlog={false}
                  name="Amita Pandey"
                  title="Community Outreach - Chair"
                  major="CompE, Spring 2022"
                  hometown="TBD"
                  quote="TBD"
                  fav_class="TBD"
                  linkedin="https://www.linkedin.com/in/amita-pandey/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Sam2}
                  isBlog={false}
                  name="Sam Unger"
                  title="WECE - Chair"
                  major="CompE, Fall 2021"
                  hometown="Orange Park, FL"
                  quote="TBD"
                  fav_class="TBD"
                  linkedin="https://www.linkedin.com/in/samantha-unger12/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Board;
