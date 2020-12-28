import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
      return (
        <Navbar classame="pr-0 pl-0" bg="light" expand="lg" sticky="top" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">
            <img
              src="images/mylogo.png"
              width="180"
              height="50"
              className="d-inline-block align-top mr-auto"
              alt="Angela Yang"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }