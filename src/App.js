import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './component/MovieList';

function App() {
  const movies = [
    {
      posterURL:
        "https://m.media-amazon.com/images/I/81GfZasnt9L._SL1371_.jpg",
      title: "Avengers Infinity war",
      description: "",
      rating: 8
    },
    {
      posterURL:
        "https://fr.web.img2.acsta.net/pictures/15/04/23/15/38/341525.jpg",
      title: "San Andres",
      description: "",
      rating: 7
    },
    {
      posterURL:
        "https://www.telerama.fr/sites/tr_master/files/194da2cc-6c97-495c-b0b1-2989bce95ef2_2.jpg",
      title: "Volcano",
      description: "",
      rating: 9
    },
    {
      posterURL:
        "https://img5.cdn.cinoche.com/images/c35d1fac2f2d79e455d8455376faf8e7.jpg",
      title: "21 Jump Street",
      description: "",
      rating: 5
    },
    {
      posterURL:
        "https://img8.cdn.cinoche.com/images/b1308f7bf851c35dc27bb0b5ab176d40.jpg",
      title: "Sherlock Holmes",
      description: "",
      rating: 8
    },
    {
      posterURL:
        "https://www.contrepoints.org/wp-content/uploads/2013/12/hunger-games-2-catching-fire.jpg",
      title: "The Hunger Games",
      description: "",
      rating: 6
    },
    {
      posterURL:
        "https://media.senscritique.com/media/000012292394/source_big/The_Mask.jpg",
      title: "The Mask",
      description: "",
      rating: 8
    },
    {
      posterURL:
        "https://musicsheetcovers.s3.eu-west-3.amazonaws.com/couv53/559/G0001081559.jpg",
      title: "Pirates of The Caribeen",
      description: "",
      rating: 7
    },
  ];

  return (
    <div className="App">
      <MovieList films={movies} />
      <div class="animation-area">
		  <ul class="box-area">
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
			  <li></li>
		  </ul>
	    </div>
    </div>
  );
}

export default App;
