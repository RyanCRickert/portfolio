import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

export default ({ name, url, description, src, classN , alt, internal, github, tags}) => (
  <div className={`portfolio-item`}>
    <img className="portfolio-item__img show-for-larger" src={src} />
    <div className="portfolio-item__text">
      <h2>{name}</h2>
      {description}<br/>
      {internal ? <Link to="/indecision">View Project</Link> : <a href={url} target="_blank">View Project</a>}&nbsp;&nbsp;&nbsp;
      <a href={github} target="_blank"><FontAwesome name="github"/></a><br/>
      <div className="portfolio-item__tags">
        {tags.map((item) => (
          <li key={item} className="portfolio-item__tag">{item}</li>
        ))}
      </div>
    </div>
  </div>
);