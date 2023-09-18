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
    >
      {imgInfo?.map((img, index) =>
        ImageWrap({ imgInfo: { ...img, index }, className: className })
      )}
    </Carousel>
  )
}
