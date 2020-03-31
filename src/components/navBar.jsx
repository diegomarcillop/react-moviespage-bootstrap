import React from "react";
import { Navbar, Nav } from "react-bootstrap";
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

function NavBar(props) { 

  return (
    <Navbar  
      style={styles.navBar}
      collapseOnSelect 
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        MAXPELIS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse  id="responsive-navbar-nav" className="mx-auto">
        <Nav className="ml-auto">
          <Link className="navlink" to="/">
            Home
          </Link> 
         
          <Link className="navlink" to="/premieres">
          Premier
          </Link>

          <Link className="navlink" to="/popular">
          Populaire
          </Link> 
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
