import React from "react";
import { useParams } from "react-router-dom";

function Image({images}) {
  const { imageId } = useParams();
  const image = images.find((img) => img.id === imageId)
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
    </div>
  ); 
}


export default Image;