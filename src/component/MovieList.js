import React from 'react'
import MovieCard from './MovieCard'

function MovieList({films, titleSearch, rateSearch }) {

    const filter = () => {
        let tableAfterSearch =
          rateSearch === 0
            ? films.filter((film) =>
                film.title.toLowerCase().includes(titleSearch.toLowerCase())
              )
            : films.filter(
                (film) =>
                  film.title
                    .toLowerCase()
                    .includes(titleSearch.toLowerCase().trim()) &&
                  film.rating === rateSearch
              )
        return tableAfterSearch
      }

    return (
        <div className="mine">
            {filter().map((e, i) => {
        return (
          <div key={i}>
            <MovieCard film={e} />
          </div>
        )
      })}
        </div>
    )
}

export default MovieList
