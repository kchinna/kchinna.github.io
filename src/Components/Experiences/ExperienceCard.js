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
          <p className="duration">{this.props.duration}</p>
          <p className="summary">{this.props.summary1}</p>
          <p className="summary">{this.props.summary2}</p>
          <p className="summary">{this.props.summary3}</p>
          <p className="summary">{this.props.summary4}</p>
        </div>
      </div>
    );
  }
}
