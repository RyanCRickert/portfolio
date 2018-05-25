import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

export default () => (
  <div className="header">
    <div className="content-container__header header-container">
        <div className="header-title">
          <Link className="button header-rickert" to="/"><div>Home</div></Link>
          <Link className="button header-blog" to="/blog"><div>Blog</div></Link>
        </div>
        <div className="header-links">
          <a href="https://github.com/RyanCRickert" target="_blank"><FontAwesome name="github-square"/></a>
          <a href="https://www.linkedin.com/in/ryan-rickert-6a12ab3b/" target="_blank"><FontAwesome name="linkedin"/></a>
          <a href="mailto: RyanCRickert@gmail.com"><FontAwesome name="envelope"/></a>
        </div>
    </div>
  </div>
);