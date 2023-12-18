import React from 'react'

import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>Rick & Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link > <Link  className='navbarlink' to="/locations">Locations</Link> </Nav.Link>
          <Nav.Link > <Link  className='navbarlink' to="/characters">Characters</Link> </Nav.Link>
          <Nav.Link > <Link  className='navbarlink'  to="/listfavo">Fav list</Link> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar