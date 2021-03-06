import React, { Component } from "react";
import "./AboutComp.css";
import Portrait from "../../Images/pfp.png";
import { Container, Row, Col } from "react-bootstrap";
import Spacer from "../Spacer/Spacer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default class AboutComp extends Component {
  render() {
    return (
      <div id="about-me">
        <Spacer />
        <h2># about me</h2>
        <a href="https://github.com/kchinna" target="_blank" rel="noreferrer">
          <FaGithub className="icons" id="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kanishk-chinna-04a6b41b0/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icons" />
        </a>
        <a
          href="https://www.instagram.com/kanishkc234/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icons" />
        </a>
        <div class="about-page-content">
          <Container className="about-grid">
            <Row>
              <Col lg={6} md={5} sm={12}>
                <div class="col-div">
                  <img
                    class="portrait-pic"
                    src={Portrait}
                    alt="Self Portrait"
                  ></img>
                </div>
              </Col>
              <Col lg={6} md={7} sm={12}>
                <div class="col-div">
                  <Container>
                    <Row className="about-text-row">
                      <Col xs={12}>
                        <p>
                          Hi, I'm Kanishk, a Computer Science student at the
                          University of Maryland - College Park.
                        </p>
                      </Col>
                    </Row>
                    <Row className="about-text-row">
                      <Col xs={12}>
                        <p>
                          For as long as I can remember, I've had a powerful
                          interest for everything in the tech space, constantly
                          keeping up with the latest releases in smartphones,
                          computer parts, and more
                        </p>
                      </Col>
                    </Row>
                    <Row className="about-text-row">
                      <Col xs={12}>
                        <p>
                          My senior year of high school, I developed an interest
                          in programming and have continued to expand that
                          passion, working on several projects as I learn new
                          technologies
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Spacer />
      </div>
    );
  }
}
