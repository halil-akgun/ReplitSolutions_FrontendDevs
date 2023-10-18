import React from 'react'
import { Container, Navbar, } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">HELLO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-3'>
            <a href="#">Login</a>
          </Navbar.Text>
          <Navbar.Text className='me-3'>
            <a href="#">Register</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="#">Contact</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header