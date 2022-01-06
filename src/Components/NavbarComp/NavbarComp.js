import React, { Component } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./NavbarComp.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          expand="lg"
          variant="dark"
          className="navbar-complete"
        >
          <Container>
            <Navbar.Brand href="#home">
              <span className="nav-item">Kanishk Chinna</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <HashLink to="#about-me">About</HashLink> */}
                <Nav.Link href="#about-me">
                  <span className="nav-item">About</span>
                </Nav.Link>
                <Nav.Link href="#projects">
                  <span className="nav-item">Projects</span>
                </Nav.Link>
                {/* <Nav.Link href="#resume">
                  <span className="nav-item">Resume</span>
                </Nav.Link> */}
                <Nav.Link href="#contact">
                  <span className="nav-item">Contact</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
