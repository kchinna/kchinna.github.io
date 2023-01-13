import React, { Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div id="contact">
        <div>
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
          <a
            href="mailto:kanishkchinna@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-button">
              kanishkchinna@gmail.com <FaEnvelope className="text-icons" />
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1_CyKqjVYh0x56i9ATxkUpbRcN8tU5Cgk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-button">
              View Resume <FaDownload className="text-icons" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
