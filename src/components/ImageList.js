import React, { Component } from "react";
import "./ImageList.scss";

export default class ImageList extends Component {
  render() {
    const images = this.props.images.map((image) => {
      return (
        <a key={image.id} href={image.urls.regular} title={image.description}>
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          />
        </a>
      );
    });
    return <div className="resultPhotos">{images}</div>;
  }
}
