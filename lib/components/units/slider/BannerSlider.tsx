import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { ImageWrap } from "../image/ImageWrap"

interface IProps {
  imgInfo: { src: string; alt: string }[]
  className?: string
}

export const BannerSlider = ({ imgInfo, className }: IProps) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
      autoPlay={true}
      stopOnHover={false}
      interval={5000}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            className="absolute top-[50%] left-5 translate-y-[-50%] text-[3.5rem] z-50 text-[#5A4E47]  hover:scale-110 duration-300"
            onClick={onClickHandler}
            title={label}
          >
            〈
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            className="absolute right-5 top-[50%] translate-y-[-50%] text-[3.5rem] z-50 text-[#5A4E47]  hover:scale-110 duration-300"
            onClick={onClickHandler}
            title={label}
          >
            〉
          </button>
        )
      }
    >
      {imgInfo?.map((img, index) =>
        ImageWrap({ imgInfo: { ...img, index }, className: className })
      )}
    </Carousel>
  )
}
