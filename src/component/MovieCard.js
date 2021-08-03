import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import './style.css';


function MovieCard({film}) {
    let {posterURL, title, description, rating, year} = film

    return (
        <div className="movie">
<Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src={posterURL} />
  <Card.Body>    
    <div>
      <Rating rate={rating} />
    </div>
    <Card.Title style={{textAlign:"center", fontSize: 18, color:"rgba(46, 43, 43, 0.678)", fontFamilly:"fantasy", fontWeight:"bolder", letterSpacing: 2}}> {title} </Card.Title>
    <h5 style={{ textAlign: "center", fontWeight:"bolder", fontSize: 15, color:"rgba(107, 106, 106, 0.87)" }}>Year: {year} </h5>
    <div>
    <Card.Text style={{ textAlign: "center", fontWeight:"bolder", fontSize: 13, color:"rgba(107, 106, 106, 0.87)" }}>
      {description}
    </Card.Text>
    </div>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
