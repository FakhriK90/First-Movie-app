import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';


const TrailerDesc = ({match, movies}) => {
    const [movie, setmovie] = useState("")
useEffect(() => {
  setmovie(movies.find(el=>el.Movie === match.params.Movie))
}, [])
    
    return (
        <div>
            <div>
            
    <Card.Text style={{ textAlign: "center", fontWeight:"bolder", fontSize: 13, color:"rgba(107, 106, 106, 0.87)" }}>
      {movie.description}
    </Card.Text>
    </div>
    <Link to="/moviepage">
        <button>Go Back</button>
    </Link>
        </div>
    )
}

export default TrailerDesc
