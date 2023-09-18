import React from "react"
import StarRatings from "react-star-ratings"

export const Rating = () => {
  return (
    <div className="relative mb-1 ml-1">
      <StarRatings
        rating={4}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
        starDimension="13px"
        starSpacing="1px"
      />
    </div>
  )
}
