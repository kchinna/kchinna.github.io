import React, { Component } from "react";
import "./TextEditorCard.css";

export default class TextEditorCard extends Component {
  render() {
    return (
      <div class="title-card-container">
        <div class="window">
          <div class="screen">
            <div class="top-bar">
              <div class="buttons"></div>
            </div>

            <div class="main-title">
              <h1 class="title">{this.props.title}</h1>
              <h2 class="subtitle">{this.props.subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
