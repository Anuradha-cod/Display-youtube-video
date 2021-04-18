import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SingleImage</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="ViewVideoSearch">ViewVideoSearch</Nav.Link>
          <Nav.Link href="youtube">Youtube</Nav.Link>
          <Nav.Link href="image">image</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Home;
