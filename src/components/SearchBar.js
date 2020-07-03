import React, { Component } from "react";
import "./SearchBar.scss";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="sb-wrap">
        <input
          type="text"
          className="search-bar"
          value={this.state.term}
          placeholder="Search for images..."
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button type="submit" className="submit-btn">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </form>
    );
  }
}
