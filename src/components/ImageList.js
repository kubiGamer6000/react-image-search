import React, { Component } from "react";
import "./ImageList.scss";

export default class ImageList extends Component {
  render() {
    const images = this.props.images.map((image, index) => {
      return (
        <a key={index} href={image.urls.regular} title={image.description}>
          <img key={index} src={image.urls.regular} alt={image.description} />
        </a>
      );
    });
    return <div className="resultPhotos">{images}</div>;
  }
}
