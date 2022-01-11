import React, { Component } from "react";
import "./CustomBtn.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <a
        href={this.props.url}
        target="_blank"
        rel="noreferrer"
        className="btn-component"
      >
        <div className="btn">
          {this.props.text} {this.props.icon}
        </div>
      </a>
    );
  }
}
