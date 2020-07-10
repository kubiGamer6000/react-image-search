import React, { Component } from "react";
import "./ImageList.scss";

export default class ImageList extends Component {
  render() {
    const images = this.props.images.map(({ description, id, urls }) => {
      return (
        <a key={id} href={urls.regular} title={description}>
          <img key={id} src={urls.regular} alt={description} />
        </a>
      );
    });
    return <div className="resultPhotos">{images}</div>;
  }
}
