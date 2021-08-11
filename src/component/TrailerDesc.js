import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./style.css";
import Rating from "./Rating";

const TrailerDesc = ({ match, movies }) => {
  const [movie, setmovie] = useState("");
  useEffect(() => {
    setmovie(movies.find((el) => el.id == match.params.id));
  }, [match.params.id]);

  return (
    <div className="traidesc">
      <div className="contai">
        <div className="vid">
          <ReactPlayer url={movie.trailer} />
        </div>

        <div className="description">
            <div className="stars">
            <Rating rate={movie.rating} />
          </div>
          <Card.Text
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: 13,
            //   color: "rgba(107, 106, 106, 0.87)",
            }}
          >
            {movie.description}
          </Card.Text>
        </div>
      </div>
      <Link to="/moviepage">        
        <button>Go Back</button>        
      </Link>

      
    </div>
  );
};

export default TrailerDesc;
