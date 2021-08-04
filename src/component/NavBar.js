// import React, { useState } from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import AddMovie from './AddMovies'
// import SearchByRating from './SearchByRating'
// import SearchByTitle from './SearchByTitle'

import pic from "./téléchargement.png"

const NavBar = ({setMovies, movies }) => {
  // const [rateSearch, setRateSearch] = useState(0);
  // const hundleTitle = (e) => setTitleSearch(e.target.value);
  // const [titleSearch, setTitleSearch] = useState('');
  
    return (
        <div className="navig">
            <Navbar sticky="top" bg="light" variant="light">
    <Navbar.Brand href="#home"
     inline className='logo'>
     <img src={pic} alt='' widht="50" height="50" />Stream-Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#search">Search</Nav.Link>
      <Nav.Link href="#movies">Movies</Nav.Link>
    </Nav>    
    <div>
    
    <AddMovie setMovies={setMovies} films={movies} />
    </div>
    {/* <SearchByTitle hundleTitle={hundleTitle} setSearch={titleSearch} />
    <SearchByRating setRateSearch={setRateSearch} rateSearch={rateSearch} /> */}
  </Navbar>
        </div>
    )
}

export default NavBar
