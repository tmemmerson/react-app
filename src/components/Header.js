import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  return (
    <React.Fragment>
      <Navbar
        style={{ backgroundColor: "rgba(245, 245, 245, 0.75)" }}
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand href="#home">Drink App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">vuoto</Nav.Link>
            <Nav.Link href="#link">branco</Nav.Link>
            <Nav.Link href="#link">vazio</Nav.Link>
            <NavDropdown title="These links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                don't go anywhere
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                but you have
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">to admit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                they are pretty
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
