import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import AddMovie from './AddMovies'
import pic from "./téléchargement.png"

const NavBar = ({setMovies, movies}) => {
    return (
        <div className="navig">
            <Navbar sticky="top" bg="light" variant="light">
    <Navbar.Brand href="#home"
     inline className='logo'>
     <img src={pic} alt='' widht="50" height="50" />Stream-Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <div>
    <AddMovie setMovies={setMovies} movies={movies} />
    </div>
  </Navbar>
        </div>
    )
}

export default NavBar
