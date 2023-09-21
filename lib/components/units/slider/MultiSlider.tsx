import "./multi-slider.css"
import React from "react"
import AliceCarousel, { Responsive } from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { Card } from "../card/Card"

interface IProps {
  imgInfo: {
    src: string
    alt: string
    title?: string
    subTitle?: string
    content?: string
    score?: number
    date?: string
  }[]
  className?: string
  isMobile?: boolean
}

const responsive: Responsive = {
  0: { items: 1 },
  768: { items: 4 },
}

export const MultiSlider = ({ imgInfo, className, isMobile }: IProps) => {
  const items = imgInfo.map((imgInfo, index) => (
    <div
      className="mx-auto w-[240px] py-3 md:py-10"
      key={imgInfo.alt + index}
      data-value={index + 1}
    >
      <Card
        title={imgInfo.title!}
        subTitle={imgInfo.subTitle!}
        className="aspect-[1/1.6] !shadow-[0px_4px_7px_0_rgba(0,0,0,0.2)]"
        content={imgInfo.content!}
        score={imgInfo.score!}
        style={{
          title: "!text-[1rem] w-[85%] !text-left",
          content:
            "!text-xs !w-[85%] !text-[#333333] border-b-[1px] !mt-[4%] !h-[75px]",
        }}
        imgInfo={imgInfo}
        date={imgInfo.date!}
      />
    </div>
  ))

  return (
    <AliceCarousel
      mouseTracking
      infinite
      paddingLeft={!isMobile ? 0 : 65}
      paddingRight={!isMobile ? 0 : 65}
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls={!isMobile}
      renderPrevButton={() =>
        !isMobile && (
          <button className="absolute top-[50%] text-[#5A4E47] hover:scale-110 duration-300 font-extrabold translate-y-[-50%] text-[3rem] -left-[50px]">
            〈
          </button>
        )
      }
      renderNextButton={() =>
        !isMobile && (
          <button className="!absolute top-[50%] text-[#5A4E47] hover:scale-110 duration-300 font-extrabold translate-y-[-50%] text-[3rem] -right-[50px]">
            〉
          </button>
        )
      }
    />
  )
}
