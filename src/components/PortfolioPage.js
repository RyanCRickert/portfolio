import React from "react";
import skills from "../skills/skills";
import works from "../works/works";
import PortfolioItem from "./PortfolioItem";

export default (props) => (
  <div className="portfolio-container">
      <div>
        <h1 className="portfolio-header__top">
          What I've Built
        </h1>
        <div className="portfolio-list">
          {works.map((work) => (
            <PortfolioItem key={work.name} {...work} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="portfolio-header">
          What I've Accomplished
        </h1>
        <div>
          <div className="portfolio-done">
          <img src="images/diploma.jpg" className="portfolio-done__img"/>
          </div>
          <div className="portfolio-done">
            <img src="images/react.jpg" className="portfolio-done__img"/>
          </div>
          <div className="portfolio-done">
            <img src="images/node.jpg" className="portfolio-done__img"/>
          </div>
        </div>
      </div>
      <div>
        <h1 className="portfolio-header">
          My Experiences Include
        </h1>
        <ul className="portfolio-skill__list">
          {skills.map((skill) => (
            <li key={skill} className="portfolio-skill">{skill}</li>
          ))}
        </ul>
      </div>
  </div>
);