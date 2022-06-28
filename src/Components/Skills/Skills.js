import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Spacer from "../Spacer/Spacer";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <Spacer />
        <h2># technical skills</h2>
        <Container className="skills-cont">
          <Row class="skills-row">
            <Col xs={12} sm={4} className="col">
              <p>Java</p>
              <p>Python</p>
              <p>Javascript</p>
              <p>C</p>
              <p>MIPS Assembly</p>
            </Col>
            <Col xs={12} sm={4} className="col">
              <p>CSS 3</p>
              <p>HTML 5</p>
              <p>ReactJS</p>
              <p>REST API</p>
              <p>Arduino C</p>
            </Col>
            <Col xs={12} sm={4} className="col">
              <p>Eclipse</p>
              <p>Visual Studio Code</p>
              <p>PyCharm</p>
              <p>Github</p>
              <p>Emacs</p>
            </Col>
          </Row>
        </Container>
        <Spacer />
      </div>
    );
  }
}
