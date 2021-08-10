import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import MovieList from './MovieList'
import SearchByRating from './SearchByRating'
import {films }from './Data';
import './style.css';

const MoviePage = () => {
    const [titleSearch, setTitleSearch] = useState('');
  const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(films);
  
    return (
        <div className="page">
            <h1>Search</h1>
      <div>
      <div>
      <SearchByRating setRateSearch={setRateSearch} rateSearch={rateSearch} />
      </div>      
      <div className="search">
      <Form inline
      >
      <FormControl 
      type="text" 
      placeholder="Search" 
      className="mr-sm-2" 
      onChange={(e) => setTitleSearch(e.target.value)} />
      <Button pill variant="dark">Search</Button>
      </Form>
      </div>
      </div>
         
      <h1>Movies</h1>
      <div>
      <MovieList 
      films={movies}
      titleSearch={titleSearch}
      rateSearch={rateSearch} />
      </div>
        </div>
    )
}

export default MoviePage
