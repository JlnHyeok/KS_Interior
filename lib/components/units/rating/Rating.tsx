import "./rating.css"
import React from "react"
import StarRatings from "react-star-ratings"

interface IProps {
  score: number
}

export const Rating = ({ score }: IProps) => {
  return (
    <div className="relative mb-1 ml-1">
      <StarRatings
        rating={score}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
        starDimension="13px"
        starSpacing="1px"
      />
    </div>
  )
}
