import React from 'react'

const Rating = ({rate}) => {
   let {rating, color} = rate
    return (
        <div>
            <span>
               <i
          style={{ color }}
          className={rating >= 1 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 2 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 3 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 4 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 5 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 6 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 7 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 8 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 9 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rating >= 10 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

        </div>
    )
}

Rating.defaultProps = {
    color: '#e7d003',
  }

export default Rating
