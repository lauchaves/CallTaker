import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export const NavBar = () => ( // The variable should be a return function...
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Call Taker & Dispatch</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} >Emergencies</NavItem>
        <NavItem eventKey={2} >Resoures</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Log out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);