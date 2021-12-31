import React, { Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import "./Footer.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="footer-page">
        <div>
          <a href="https://github.com/kchinna" target="_blank">
            <FaGithub className="icons" id="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kanishk-chinna-04a6b41b0/"
            target="_blank"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.instagram.com/kanishkc234/" target="_blank">
            <FaInstagram className="icons" />
          </a>
          <a href="mailto:kanishkchinna@gmail.com" target="_blank">
            <div className="text-button">
              kanishkchinna@gmail.com <FaEnvelope className="text-icons" />
            </div>
          </a>
          <a href="src/Images/kchinnap-resume.pdf" target="_blank">
            <div className="text-button">
              View Resume <FaDownload className="text-icons" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
