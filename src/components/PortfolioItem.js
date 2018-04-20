import React from "react";

export default ({ name, url, description, src, classN , alt}) => (
  <div className={`portfolio-item`}>
    <h2>{name}</h2>
    <a href={url} target="_blank"><img className="portfolio-item__img" src={src} alt="Sample photo of the item's homepage" /></a>
    <div>
      {description}
    </div>
  </div>
);