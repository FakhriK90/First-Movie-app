import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';

import MovieList from './component/MovieList';
import NavBar from './component/NavBar';
import SearchByRating from './component/SearchByRating';
// import SearchByTitle from './component/SearchByTitle';
import {films }from './Data';

function App() {

  

  const [titleSearch, setTitleSearch] = useState('');
  const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(films);

  // const hundleTitle = (e) => setTitleSearch(e.target.value);

  return (
    <div className="App">
      <header>
        <NavBar 
        setMovies={setMovies}
        movies={movies} />
      </header>
      <main>
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
      {/* <SearchByTitle hundleTitle={hundleTitle} setSearch={titleSearch} /> */}      
      <h1>Movies</h1>
      <div>
      <MovieList 
      films={movies}
      titleSearch={titleSearch}
      rateSearch={rateSearch} />
      </div>
      {/* <div className="animation-area">
		  <ul className="box-area">
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
		  </ul>
	    </div> */}
      </main>
    </div>
  );
}

export default App;
