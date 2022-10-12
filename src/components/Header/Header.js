import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

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
                    <LinkContainer to="/quiz/1">
                        <Nav.Link href="">React</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/quiz/2">
                        <Nav.Link href="">JavaScript</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/quiz/4">
                        <Nav.Link>CSS</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/quiz/5">
                        <Nav.Link href="">Git</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;