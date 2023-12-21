import React from "react";
import { Link } from "react-router-dom";

function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <Link to={`image/${image.id}`} key={image.id}>
          <img src={image.url} alt={image.title} />
        </Link>
      ))}
    </div>
  );
}

export default ImageList;
