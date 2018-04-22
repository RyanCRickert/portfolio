import React from "react";
import { Link } from "react-router-dom";

export default ({ name, url, description, src, classN , alt, internal}) => (
  <div className={`portfolio-item`}>
    <h2>{name}</h2>
    {internal ? <Link to="/indecision"><img className="portfolio-item__img" src={src} alt="Sample photo of the item's homepage" /></Link> 
      : <a href={url} target="_blank"><img className="portfolio-item__img" src={src} alt="Sample photo of the item's homepage" /></a>}
    <div className="portfolio-item__text">
      {description}
    </div>
  </div>
);