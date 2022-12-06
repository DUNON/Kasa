import React from 'react'
import "./Rating.css"
import fullStar from "../../assets/img/fullStar.png"
import emptyStar from "../../assets/img/emptyStar.png"

export default function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
        {stars.map((star) =>
          rating >= star ? (
            <img
              key={star.toString()}
              className="rating_icon"
              src={fullStar}
              alt="red star"
            />
          ) : (
            <img
              key={star.toString()}
              className="rating_icon"
              src={emptyStar}
              alt="grey star"
            />
          )
        )}
      </div>
  )
}
