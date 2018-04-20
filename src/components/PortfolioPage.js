import React from "react";
import works from "../works/works";
import PortfolioItem from "./PortfolioItem";

export default (props) => (
  <div>
      <div className="portfolio-container">
      <h1 className="portfolio-header">
        Things I've built
      </h1>
        {works.map((work) => (
          <PortfolioItem key={work.name} {...work} />
        ))}
      </div>
  </div>
);