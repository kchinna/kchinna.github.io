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
              <p>C</p>
              <p>Javascript</p>
              <p>Python</p>
              <p>ExpressJS</p>
              <p>Typescript</p>
              <p>ReactJS</p>
              <p>HTML</p>
            </Col>
            <Col xs={12} sm={4} className="col">
              <p>CSS 3</p>
              <p>TailwindCSS</p>
              <p>AWS S3</p>
              <p>AWS DynamoDB</p>
              <p>AWS Lambda</p>
              <p>Firebase</p>
              <p>REST APIs</p>
              <p>Eclipse</p>
            </Col>
            <Col xs={12} sm={4} className="col">
            <p>Visual Studio Code</p>
              <p>PyCharm</p>
              <p>Github &amp; Gitlab</p>
              <p>Git</p>
              <p>Emacs</p>
              <p>JUnit</p>
              <p>PHP</p>
              <p>Laravel</p>
            </Col>
          </Row>
        </Container>
        <Spacer />
      </div>
    );
  }
}
