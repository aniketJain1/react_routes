import { Flex } from "@chakra-ui/react";
import React from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

function NavbarC() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed='top' bg="dark" variant="dark" expand="md" >
              <Container>
                <Navbar.Brand href="#" className="d-flex">
                  <img
                    src="logo512.png"
                    width="30"
                    height="30"
                    className="align-top"
                  />{" "}
                  &nbsp; My Website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <NavDropdown title="Services" id="my-nav">
                      <NavDropdown.Header>Heading 1</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Header>Heading 1</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Products</Nav.Link>
                  </Nav>
                  <Navbar.Text>
                    Sign In Here <a href="#">Login</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavbarC;
