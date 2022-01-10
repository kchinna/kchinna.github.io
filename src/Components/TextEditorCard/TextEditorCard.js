import React, { Component } from "react";
import "./TextEditorCard.css";

export default class TextEditorCard extends Component {
  render() {
    return (
      <div class="title-card-container" id="home">
        <div class="window">
          <div class="screen">
            <div class="top-bar">
              <div class="buttons"></div>
            </div>

            <div class="main-title">
              <h1 class="title">{this.props.title}</h1>
              <p class="subtitle">{this.props.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
