import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
        return (
                <header className="mb-4">
                        <Navbar bg="dark" variant='dark'  expand="lg" collapseOnSelect>
                                <Container>
                                        <Link to={`/`}>
                                                <Navbar.Brand>BD-Shop</Navbar.Brand>
                                        </Link>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className='m-right'> 
                                                        <Link to={`/cart`}>
                                                                <Nav.Link href="/cart"> <i className=" fas fa-shopping-cart"></i>&nbsp;Card</Nav.Link>
                                                        </Link>
                                                        <Link to={`/login`}>
                                                                <Nav.Link href="/login"><i className="fas fa-user"></i>&nbsp;Sign In</Nav.Link>
                                                        </Link>
                                                </Nav>
                                        </Navbar.Collapse> 
                                </Container> 
                        </Navbar>
                </header>
        )
}
