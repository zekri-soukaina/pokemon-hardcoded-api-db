import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Poke hardcodes()
      </Navbar.Brand>
      <Navbar.Brand as={NavLink} to="/pokemon">
        Poke API()
      </Navbar.Brand>
      <Navbar.Brand as={NavLink} to="/db">
        Poke Db()
      </Navbar.Brand>
    </Navbar>
  );
}
