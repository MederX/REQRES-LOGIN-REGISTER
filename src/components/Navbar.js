// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = ({ onSelect }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">ReqRes Auth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#register" onClick={() => onSelect('register')}>Register</Nav.Link>
          <Nav.Link href="#login" onClick={() => onSelect('login')}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
