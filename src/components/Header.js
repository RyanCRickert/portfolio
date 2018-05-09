import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="header">
    <div className="content-container header-container">
        <div className="header-title">
          <NavLink className="button header-rickert" to="/"><div>Rickert Riot</div></NavLink>
        </div>
        <div className="header-links">
          <NavLink className="button header-portfolio" activeClassName="button-active" to="/portfolio"><div>Portfolio</div></NavLink>
          <NavLink className="button header-blog" activeClassName="button-active" to="/blog"><div>Blog</div></NavLink>
        </div>
    </div>
  </div>
);