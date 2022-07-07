import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experiences.css";
import ExperienceCard from "./ExperienceCard";
import Spacer from "../Spacer/Spacer";

export default class Experiences extends Component {
  render() {
    return (
      <div id="experiences">
        <Spacer />
        <h2># experiences</h2>
        <Container>
          <Row style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Col lg={4} md={12}>
              <ExperienceCard
                title="Maryland Masti"
                duration="October 2021 - Present"
                summary1="❖ Developing mobile app for annual Raas dance competition to allow for mass communication with participants"
                summary2="❖ Working cohesively with chair members for registration, organization, etc to create experience for participants"
                summary3="❖ Learning to combine back end and front end technologies to creat full stack application"
              />
            </Col>
            <Col lg={4} md={12}>
              <ExperienceCard
                title="Safeway"
                duration="July 2021 - August 2021"
                summary1="❖ Worked in professional collaborative environment alongside diverse group of 30+ employees"
                summary2="❖ Coordinated cleaning and hospitality duties with 6+ employees to maintain presentable commercial environment"
                summary3="❖ Improved interpersonal communication skills while greeting and assisting customers"
              />
            </Col>
            <Col lg={4} md={12}>
              <ExperienceCard
                title="California Robotics Academy"
                duration="August 2019 - August 2021"
                summary1="❖ Created curriculum covering Arduino circuitry and programming"
                summary2="❖ Taught programming, circuitry, CAD, and engineering design to 15+ elementary school students"
                summary3="❖ Implemented interactive and engaging teaching methods including learning activities and assessments"
                summary4="❖ Communicated with parents and supervisors to discuss student progress and answer questions"
              />
            </Col>
            <Col lg={4} md={12}>
              <ExperienceCard
                title="Irvington Robotics Academy"
                duration="August 2017 - June 2021"
                summary1="❖ Lead Team 44730A to first states qualification in academy history of 8+ years"
                summary2="❖ Guided design and construction of robotic subsystems including drive systems, lifts, flywheels, and intakes"
                summary3="❖ Developed software to harness motor control and sensor input for each mechanism using C++"
                summary4="❖ Organized 5+ virtual and COVID safety compliant in-person training workshops for new club members"
              />
            </Col>
          </Row>
        </Container>
        <Spacer />
      </div>
    );
  }
}
