import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import Seacher from "./searcher";
import { Link } from "react-router-dom";

const styles = {
  navBar: {
    fontFamily: "Fredoka One, Cursive",
    backgroundColor: "#152026",
    height: "60px",
    fontSize: "calc(0.5em + 0.6vw)",
    position: "relative"
  }
};

function navBar(props) {
  return (
    <Navbar
      style={styles.navBar}
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        MAXPELIS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="navlink" to="/">
            Inicio
          </Link>
          <Link className="navlink" to="/peliculas">
            Peliculas
          </Link>
          <Link className="navlink" to="/series">
            Series
          </Link>
          <Link className="navlink" to="/documentales">
            Documentales
          </Link>

          <Link className="navlink" to="/popular">
            Popular
          </Link>
        </Nav>
        <Seacher />
      </Navbar.Collapse>
    </Navbar>
  );
}
export default navBar;
