import { Nav, Navbar } from "react-bootstrap";
import AddMovie from "./AddMovies";
import pic from "./téléchargement.png";
import { Link } from 'react-router-dom'

const NavBar = ({ setMovies, movies }) => {
  return (
    <div className="navig">
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="#home" inline className="logo">
          <img src={pic} alt="" widht="50" height="50" />
          Stream-Movies
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Nav.Link href="#search">Search</Nav.Link>
          <Link to="/moviepage">Movies</Link>
        </Nav>
        <div>
          <AddMovie setMovies={setMovies} films={movies} />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
