import React, { Component } from "react";
import "./ProjectsGrid.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default class ProjectsGrid extends Component {
  render() {
    return (
      <div class="project-page">
        <h2>// projects</h2>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <ProjectCard
                title="Pixel Recoloring"
                summary="Detects black pixels within a certain threshold in an image and converts it into a user inputted color. GUI (built with Tkinter) allows for user to provide link to image and RGB values."
                icon={<FaGithub className="github-icon" />}
                url={"https://github.com/kchinna/recolor_black_pixels"}
                img={"https://img.icons8.com/color/48/000000/python--v1.png"}
                img2={"https://img.icons8.com/color/48/000000/opencv.png"}
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <ProjectCard
                title="Tic-Tac-Toe Discord Bot"
                summary="The classic game of tic-tac-toe brought to discord via Discord.py, featuring a more user friendly and visually appealing form factor."
                icon={<FaGithub className="github-icon" />}
                url={"https://github.com/kchinna/tictactoe-bot"}
                img={"https://img.icons8.com/color/48/000000/python--v1.png"}
                img2={"https://img.icons8.com/color/48/000000/discord-logo.png"}
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <ProjectCard
                title="Portfolio Website v1"
                summary="An older version of my portfolio website that takes insipiration from the google store and presents the viewer with a summary of my projects, my resume, my contact, and a little information about me."
                icon={<FaGithub className="github-icon" />}
                url={"https://github.com/kchinna/kchinna.github.io"}
                img={"https://img.icons8.com/color/48/000000/html-5--v1.png"}
                img2={"https://img.icons8.com/color/48/000000/css3.png"}
                img3={
                  "https://img.icons8.com/color/48/000000/javascript--v1.png"
                }
                img4={"https://img.icons8.com/ios-filled/50/000000/jquery.png"}
              />
            </Col>
            <Col lg={3} md={6} sm={12}>
              <ProjectCard
                title="Complex-Calculator"
                summary="The complex-calculator uses object oriented programming concepts to create a set of methods that allow the user to complete mathematical operations with complex numbers."
                icon={<FaGithub className="github-icon" />}
                url={"https://github.com/kchinna/complex-numbers"}
                img={
                  "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
