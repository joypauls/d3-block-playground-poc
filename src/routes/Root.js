import React from "react";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            D3.js Block Playground
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sandbox">
              Sandbox
            </Nav.Link>
            <Nav.Link as={Link} to="/animation">
              Animation
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="content">
        <Container style={{ margin: "1rem" }}>
          <Row>
            <Outlet />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Root;
