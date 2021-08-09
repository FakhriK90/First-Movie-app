import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
// import MovieList from './component/MovieList';
import NavBar from './component/NavBar';
// import SearchByRating from './component/SearchByRating';
import {films }from './component/Data';
import MoviePage from './component/MoviePage';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  

  // const [titleSearch, setTitleSearch] = useState('');
  // const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(films);

  
  return (


    <Router>
      <header>
        <NavBar 
        setMovies={setMovies}
        movies={movies} />
</header>

    <Switch>
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/moviepage" component={MoviePage}/>
                 
    </div>
    </Switch>
    </Router>
  );
}

export default App;
