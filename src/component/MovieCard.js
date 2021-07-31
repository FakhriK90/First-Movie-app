import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import './style.css';


function MovieCard({film}) {
    let {posterURL, title, description, rating} = film

    return (
        <div className="safa">
<Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src={posterURL} />
  <Card.Body>
    <Card.Title style={{textAlign:"center", fontSize: 20, color:"red", fontFamilly:"fantasy", fontWeight:"bolder"}}> {title} </Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
    <div>
    <Rating rate={rating} />
    </div>
</Card>
        </div>
    )
}

export default MovieCard
