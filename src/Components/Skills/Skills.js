import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <h2># technical skills</h2>
        <Container className="skills-cont">
          <Row class="skills-row">
            <Col xs={12} sm={4} className="col">
              <p>Java</p>
              <p>Python</p>
              <p>Javascript</p>
              <p>HTML 5</p>
            </Col>
            <Col xs={12} sm={4} className="col">
              <p>CSS 3</p>
              <p>ReactJS</p>
              <p>REST API</p>
              <p>Arduino C</p>
            </Col>
            <Col xs={12} sm={4} className="col">
              <p>Eclipse</p>
              <p>Visual Studio Code</p>
              <p>PyCharm</p>
              <p>Github</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
