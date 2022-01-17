import React, { Component } from "react";
import "./TextEditorCard.css";
import Spacer from "../Spacer/Spacer";
import Typewriter from "typewriter-effect";

export default class TextEditorCard extends Component {
  render() {
    return (
      <div class="title-card-container" id="home">
        <Spacer />
        <div class="window">
          <div class="screen">
            <div class="top-bar">
              <div class="buttons"></div>
            </div>

            <div class="main-title">
              <h1 class="title">{this.props.title}</h1>
              <p class="subtitle">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(this.props.subtitle)

                      .pauseFor(900)
                      .deleteAll()
                      .typeString(this.props.subtitle2)
                      .start();
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
