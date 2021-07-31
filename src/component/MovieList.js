import React from 'react'
import MovieCard from './MovieCard'

function MovieList({films}) {
    
    return (
        <div className="mine">
            {
                films.map(
                    (e,i) => <MovieCard key={i} film={e} /> )
            }
        </div>
    )
}

export default MovieList
