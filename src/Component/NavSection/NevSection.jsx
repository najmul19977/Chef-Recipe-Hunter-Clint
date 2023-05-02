import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NevSection = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='text-primary fw-bold' href="#home">Chef Hunter</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NevSection;