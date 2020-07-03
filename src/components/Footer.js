import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          {this.props.images.length} (Max: 20) image results for "
          {this.props.term}" | Made by Vili
        </p>
      </footer>
    );
  }
}
