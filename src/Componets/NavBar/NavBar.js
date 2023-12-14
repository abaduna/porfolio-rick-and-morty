import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink ,Outlet} from "react-router-dom";


function NavBar() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Rick and morty</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link >
                    <NavLink to="/Characters"  activeStyle={{ color: "yellowd" }}>
                      Characters
                    </NavLink>
                   
                </Nav.Link>
                <Nav.Link >
                    <NavLink to="/locations"  activeStyle={{ color: "yellowd" }}>
                    locations
                    </NavLink>
                   
                </Nav.Link>
                
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
        </>

      );
}

export default NavBar