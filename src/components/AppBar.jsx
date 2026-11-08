import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppBar() {
    return (
        <div>
            <Navbar expand="lg" className="bgnav">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Aura Beauty</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                        <Nav>
                           <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/product" className="nav-link">Shop</Link>
            <Link to="/form" className="nav-link">Contact Us</Link>
                           
                              <Nav.Link > <i className="bi bi-cart3"></i></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppBar