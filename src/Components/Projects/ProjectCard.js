import React, { Component } from "react";
import "./ProjectCard.css";
import CustomBtn from "../CustomBtn/CustomBtn";

export default class ProjectCard extends Component {
  render() {
    return (
      <div class="card-window">
        <div class="card-screen">
          <div class="card-top-bar">
            <div class="buttons"></div>
          </div>
          <h3 className="proj-title">{this.props.title}</h3>
          <p className="summary">{this.props.summary}</p>
          <p className="tech-used">
            <img src={this.props.img} />
            <img src={this.props.img2} />
            <img src={this.props.img3} />
            <img src={this.props.img4} />
          </p>
          <CustomBtn
            text="Learn More"
            icon={this.props.icon}
            url={this.props.url}
          />
        </div>
      </div>
    );
  }
}
