import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import Link from "next/link"
import { ImageWrap } from "../image/ImageWrap"

interface IProps {
  imgInfo: { src: string; alt: string }[]
}

export const Slider = ({ imgInfo }: IProps) => {
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
      {imgInfo?.map((img, index) => ImageWrap({ imgInfo: { ...img, index } }))}
    </Carousel>
  )
}
