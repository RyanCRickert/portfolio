import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Rickert Riot</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="navbar-collapse">
        <Nav bsStyle="pills">
          <LinkContainer to="/portfolio">
            <NavItem>
              Portfolio
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/blog">
            <NavItem>
              Blog
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);