import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { ImageWrap } from "../image/ImageWrap"
import { bannerInnerText } from "@/lib/constants/data/image"

interface IProps {
  imgInfo: { src: string; alt: string; className?: string }[]
  className?: string
  isMobile: boolean
}

export const BannerSlider = ({ imgInfo, className, isMobile }: IProps) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={!isMobile}
      animationHandler={isMobile ? "fade" : "slide"}
      autoPlay={true}
      stopOnHover={false}
      interval={5000}
      showArrows={!isMobile}
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
        ImageWrap({
          imgInfo: { ...img, index },
          className: className,
          innerText: isMobile ? bannerInnerText[index] : undefined,
          imgBlur: "md:blur-none blur-[2px]",
        })
      )}
    </Carousel>
  )
}
