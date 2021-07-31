import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top" bg="light" variant="light">
    <Navbar.Brand className="bar" href="#home">Stream-Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default NavBar
