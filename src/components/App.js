import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "./App.scss";
import ImageList from "./ImageList";
import Footer from "./Footer";

export default class App extends Component {
  state = { images: [] };

  term = "";
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 },
    });
    this.term = term;
    this.setState({ images: response.data.results });
  };
  getFooter() {
    if (this.state.images.length) {
      return <Footer images={this.state.images} term={this.term} />;
    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {this.getFooter()}
      </div>
    );
  }
}
