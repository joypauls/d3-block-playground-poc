import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Three.js Playground
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sandbox">
              Sandbox
            </Nav.Link>
            <Nav.Link href="#features">Stack</Nav.Link>
            <Nav.Link href="#pricing">Gravity Stack</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
