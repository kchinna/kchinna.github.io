import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavbarComp.css";
import { HashLink } from "react-router-hash-link";

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
            <HashLink to="/">
              <Navbar.Brand href="#home">
                <span className="nav-item">Kanishk Chinna</span>
              </Navbar.Brand>
            </HashLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <HashLink to="#about-me">About</HashLink> */}
                <HashLink to="/#about-me">
                  <span className="nav-item">About</span>
                </HashLink>
                <Nav.Link href="#projects">
                  <span className="nav-item">Projects</span>
                </Nav.Link>
                <Nav.Link href="#skills">
                  <span className="nav-item">Skills</span>
                </Nav.Link>
                <Nav.Link href="#experiences">
                  <span className="nav-item">Experiences</span>
                </Nav.Link>
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
