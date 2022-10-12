import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>LanTabur Quiz Club</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/blog">
                        <Nav.Link href="/">Blog</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Quizes" id="navbarScrollingDropdown">
                        <LinkContainer to="/quiz/1">
                            <NavDropdown.Item href="">React</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/quiz/2">
                            <NavDropdown.Item href="">JavaScript</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/quiz/4">
                            <NavDropdown.Item href="">CSS</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/quiz/5">
                            <NavDropdown.Item href="">Git</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/statistics">
                        <Nav.Link href="/">Statistics</Nav.Link>
                    </LinkContainer>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;