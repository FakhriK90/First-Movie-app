import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
// import MovieList from './component/MovieList';
import NavBar from './component/NavBar';
// import SearchByRating from './component/SearchByRating';
import {films }from './component/Data';
import MoviePage from './component/MoviePage';
import TrailerDesc from './component/TrailerDesc';
import Home from './component/homePage/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  

  const [movies, setMovies] = useState(films);

  
  return (


    <Router>
      <header>
        <NavBar 
        setMovies={setMovies}
        movies={movies} />
</header>
<div className="App">
    <Switch>
  
      <Route exact path="/" component={Home}/>
      <Route exact path="/moviepage" component={MoviePage}/>
      <Route path = {`/:Movie`} render={(props) => <TrailerDesc movies={movies}
    {...props} />}
     />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
