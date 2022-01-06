import React, { Component } from "react";
import "./ExperienceCard.css";

export default class ExperienceCard extends Component {
  render() {
    return (
      <div class="card-window">
        <div class="card-screen">
          <div class="card-top-bar">
            <div class="buttons"></div>
          </div>
          <h3 className="exp-title">{this.props.title}</h3>
          <p className="duration">{this.props.duration1}</p>
          <p className="duration">{this.props.duration2}</p>
          <p className="summary">{this.props.summary}</p>
        </div>
      </div>
    );
  }
}
