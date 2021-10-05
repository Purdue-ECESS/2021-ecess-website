import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCard";
import Particle from "../Particle";

import Alyssa from "../../Assets/BoardPics/Alyssa_DeLouise.jpeg";
import Naveen from "../../Assets/BoardPics/Naveen_Vivek.jpeg";
import Ryan from "../../Assets/BoardPics/Ryan_Villarreal.jpeg";
import Altay from "../../Assets/BoardPics/Altay_Atik.png";
import Andrew from "../../Assets/BoardPics/Andrew_Lake.png";
import Jack from "../../Assets/BoardPics/Jack_Brewer.png"
import Alexandra from "../../Assets/BoardPics/Alexandra_Sichterman.jpeg"
import Amita from "../../Assets/BoardPics/Amita_Pandey.jpeg"
import Denae from "../../Assets/BoardPics/Denae_Galloway.jpeg"
import Sara from "../../Assets/BoardPics/Sara_Hui.jpeg"
import Edmund from "../../Assets/BoardPics/Edmund_Leung.png"
import Sam2 from "../../Assets/BoardPics/Samantha_Unger.jpeg"
import Hope from "../../Assets/BoardPics/Hope_Post.png" 
import Claire from "../../Assets/BoardPics/Claire_Poukey.jpg" 
import LeighAnn from "../../Assets/BoardPics/Leigh_Ann.png"
import Giselle from "../../Assets/BoardPics/Giselle_Bender.png"
import Akshaj from "../../Assets/BoardPics/Akshaj_Prasannakumar.png"

function Board() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
        <h1 style={{ fontSize: "4em", paddingBottom: "17px" }}>
            <strong className="yellow">Executive Board</strong>
        </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>

          <p className="yellow">
          "The purpose of the Electrical and Computer Engineering Student Society is to provide ECE
          students with an educational and professional community aimed at preparing students for a
          rigorous academic program, exploring educational and professional post-baccalaureate options
          and making the most out of their Purdue Experience."
          </p>

          <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Ryan}
                  name="Ryan Villarreal"
                  title="President"
                  contact="villar10@purdue.edu"
                  major="CompE & BBS, Spring 2022"
                  hometown="Oswego, IL"
                  quote="The risk I took was calculated, but man, am I bad at math."
                  fav_class="ECE 36200"
                  linkedin="https://www.linkedin.com/in/ryan-villarreal/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Denae}
                  name="Denae Galloway"
                  title="Vice President"
                  contact="gallowd@purdue.edu"
                  major="EE, Spring 2023"
                  hometown="Saint John, IN"
                  quote="Believe you can and you're halfway there."
                  fav_class="ECE 270"
                  linkedin="https://www.linkedin.com/in/denae-galloway/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Alexandra}
                  name="Alexandra E. Sichterman"
                  title="Secretary & Treasurer"
                  major="CompE, Spring 2022"
                  contact="asichter@purdue.edu"
                  hometown="Muscatine, IA"
                  quote="There are night owls and there are early birds, but I am a permanently exhausted pigeon."
                  fav_class="ECE 36200"
                  linkedin="http://linkedin.com/in/naveen-vivek/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Amita}
                  name="Amita Pandey"
                  title="Community Outreach - Chair"
                  contact="pandey26@purdue.edu"
                  major="CompE, Fall 2021"
                  hometown="Fort Collins, CO"
                  quote="I'm not lazy, I prefer to call it selective participation."
                  fav_class="ECE 40400"
                  linkedin="https://www.linkedin.com/in/amita-pandey/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Akshaj}
                  name="Akshaj Prasannakumar"
                  title="Community Outreach - Co-Chair"
                  contact="aprasan@purdue.edu"
                  major="CompE, Spring 2022"
                  hometown="Aurora, IL"
                  quote="Do or do not. There is no try. - Yoda"
                  fav_class="ECE 33700"
                  linkedin="https://www.linkedin.com/in/akshaj-prasannakumar-733704176/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Sara}
                  name="Sara Hui"
                  title="ECE Ambassadors - Chair"
                  contact="hui12@purdue.edu"
                  major="EE, Spring 2022"
                  hometown="Honolulu, HI"
                  quote="Roll with the punches!"
                  fav_class="ECE 44000"
                  linkedin="https://www.linkedin.com/in/sara-hui-purdue/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Andrew}
                  name="Andrew Lake"
                  title="Faculty Outreach - Chair"
                  contact="lake14@purdue.edu"
                  major="EE, Spring 2022"
                  hometown="Flint, Michigan"
                  quote="Don't force it, just get a bigger hammer."
                  fav_class="ECE 30500"
                  linkedin="https://www.linkedin.com/in/andrewlake2000/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Edmund}
                  name="Edmund Leung"
                  title="Faculty Outreach - Co-chair"
                  contact="leung55@purdue.edu"
                  major="EE, Spring 2024"
                  hometown="Olmsted Falls, OH"
                  quote="When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay? - Michael Scott"
                  fav_class="ECE 27000"
                  linkedin="https://www.linkedin.com/in/edmund-leung-4511191b7/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Claire}
                  name="Claire Poukey"
                  title="Multicultural Affairs - Chair"
                  contact="cpoukey@purdue.edu"
                  major="CompE, Fall 2023"
                  hometown="Highland Park, IL"
                  quote="The city is flying, we're fighting an army of robots... and I have a bow and arrow. None of this makes sense. - Clint Barton (MCU)"
                  fav_class="ECE 26400"
                  linkedin="https://www.linkedin.com/in/clairepoukey/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Alyssa}
                  name="Alyssa DeLouise"
                  title="Publicity - Chair"
                  contact="adelouis@purdue.edu"
                  major="EE, Fall 2022"
                  hometown="Old Bridge, NJ"
                  quote="Let courage carry you."
                  fav_class="ECE 27000"
                  linkedin="https://www.linkedin.com/in/alyssadelouise/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Jack}
                  name="Jack Brewer"
                  title="Social Committee - Chair"
                  contact="brewe116@purdue.edu"
                  major="CompE, Spring 2024"
                  hometown="St. Louis, MO"
                  quote="Always Max Jump"
                  fav_class="ECE 26400"
                  linkedin="https://linkedin.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Altay}
                  name="Altay Atik"
                  title="Spark Challenge - Chair"
                  contact="aatik@purdue.edu"
                  major="EE, Spring 2023"
                  quote="Simple can be harder than complex."
                  fav_class="ECE 27000"
                  linkedin="https://www.linkedin.com/in/altayaskinatik/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Naveen}
                  name="Naveen Vivek"
                  title="Website Development - Chair"
                  contact="vivek@purdue.edu"
                  major="EE, Spring 2022"
                  hometown="Chennai, India"
                  quote="Quotes are overrated."
                  fav_class="ECE 27000"
                  linkedin="http://linkedin.com/in/naveen-vivek/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Sam2}
                  name="Samantha Unger"
                  title="WECE - Chair"
                  contact="unger12@purdue.edu"
                  major="CompE, Spring 2022"
                  hometown="Jacksonville, FL"
                  quote="Shoot for the moon and if you miss you’ll end up amongst the stars!"
                  fav_class="ECE 36200"
                  linkedin="https://www.linkedin.com/in/samantha-unger12/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Hope}
                  name="Hope Post"
                  title="WECE - Co-chair"
                  contact="posth@purdue.edu"
                  major="CompE, Spring 2023"
                  hometown="Westford, MA"
                  quote="Ask for what you want and be prepared to get it. - Maya Angelou"
                  fav_class="ECE 20875"
                  linkedin="https://www.linkedin.com/in/hope-post/"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={LeighAnn}
                  name="Leigh Ann Fabries"
                  title="ECESS Advisor"
                  contact="lpittsfo@purdue.edu"
                  hometown="Middletown, IN"
                  quote="You change the world when you change your mind"
                  fav_class="ECE 29401"
                  linkedin="https://www.linkedin.com/in/leigh-ann-fabriès-96189735"
              />
            </Col>

            <Col md={4} className="project-card">
              <BoardCard
                  imgPath={Giselle}
                  name="Giselle Salina-Bender"
                  title="ECESS Advisor"
                  contact="gsalina@purdue.edu"
                  hometown="San Juan, PR"
                  quote="For there is ALWAYS light, if only we are brave enough to see it, 
                  if only we are brave enough to BE it. – Amanda Gorman"
                  fav_class="ECE 29401"
                  linkedin="https://www.linkedin.com/in/giselle-bender-407417aa"
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Board;
