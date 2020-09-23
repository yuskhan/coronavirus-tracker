import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../images/virus-icon.png";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand>
        Coronavirus Tracker
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Coronavirus Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {props.children}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
