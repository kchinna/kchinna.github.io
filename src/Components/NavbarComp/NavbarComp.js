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
          <Container id="nav-container">
            <HashLink smooth to="/#home">
              <Navbar.Brand>
                <span className="nav-item" id="nav-title">
                  Kanishk Chinna
                </span>
              </Navbar.Brand>
            </HashLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <HashLink to="#about-me">About</HashLink> */}
                <HashLink smooth to="/#about-me" className="navbar-link">
                  <span className="nav-item">about</span>
                </HashLink>
                <HashLink smooth to="/#projects" className="navbar-link">
                  <span className="nav-item">projects</span>
                </HashLink>
                <HashLink smooth to="/#skills" className="navbar-link">
                  <span className="nav-item">skills</span>
                </HashLink>
                <HashLink smooth to="/#experiences" className="navbar-link">
                  <span className="nav-item">experiences</span>
                </HashLink>
                <HashLink smooth to="/#contact" className="navbar-link">
                  <span className="nav-item">contact</span>
                </HashLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
