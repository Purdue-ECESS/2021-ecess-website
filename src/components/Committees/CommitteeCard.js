import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";

import { ImWoman } from "react-icons/im";
import { 
    GiTeacher, 
    GiShakingHands, 
    GiThreeFriends, 
    GiPublicSpeaker
} from "react-icons/gi"

import { FaHandHoldingHeart, FaCodeBranch } from "react-icons/fa"
import { BsFillLightningChargeFill } from "react-icons/bs"

function CommitteeCard(props) {
    
    // var logo;
    // switch(props.name) {
    // case "Faculty Outreach"      : logo = <GiTeacher size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Community Outreach"    : logo = <GiPublicSpeaker size={100} style={{ color: "#cfb991" }}/>; break;
    // case "ECE Ambassadors"       : logo = <GiShakingHands size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Multicultural Affairs" : logo = <FaHandHoldingHeart size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Publicity"             : logo = <AiFillInstagram size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Social"                : logo = <GiThreeFriends size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Spark Challenge"       : logo = <BsFillLightningChargeFill size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Website Development"   : logo = <FaCodeBranch size={100} style={{ color: "#cfb991" }}/>; break;
    // case "Women in ECE"          : logo = <ImWoman size={100} style={{ color: "#cfb991" }}/>; break;
    // default: logo = <AiFillGithub size={100} />; break;
    // }

    return (
        <Card className="project-card-view">
            <Card.Body>

            {/* {logo} */}
            {/* <br/> <br/> */}

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
                {props.link ?
                    <Button variant="primary" href={props.link} target="_blank">
                        {"Website"}
                    </Button> : <></>
                }
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                    {props.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}
export default CommitteeCard;
