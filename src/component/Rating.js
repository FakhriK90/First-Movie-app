import React from 'react'

const Rating = ({rate,color}) => {

    return (
        <div className="stars">
            <span>
               <i
          style={{ color }}
          className={rate >= 1 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rate >= 2 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rate >= 3 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rate >= 4 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>

            <span>
               <i
          style={{ color }}
          className={rate >= 5 ? 'fas fa-star' : 'far fa-star'}
               ></i>
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#e7d003',
  }

export default Rating