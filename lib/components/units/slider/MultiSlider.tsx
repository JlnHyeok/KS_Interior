import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { Card } from "../card/Card"

interface IProps {
  imgInfo: { src: string; alt: string }[]
  className?: string
}

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
}

export const MultiSlider = ({ imgInfo, className }: IProps) => {
  const items = imgInfo.map((imgInfo, index) => (
    <div
      className="mx-auto w-[80%] py-10"
      key={imgInfo.alt + index}
      data-value={index + 1}
    >
      <Card
        title="꼼꼼하게 시공해주셔서 너무 너무 감사합니다."
        smallTitle="트렌디 화이트"
        height="aspect-[1/1.6]"
        content="제가 원했던 느낌대로 시공해주시려고 노력하는 모습에 너무 좋았습니다 ㅎㅎ"
        score={true}
        style={{
          title: "!text-[1rem] w-[85%]",
          content:
            "!text-xs !w-[85%] !text-[#333333] border-b-[1px] !mt-[4%] h-[60px]",
        }}
        imgInfo={imgInfo}
      />
    </div>
  ))

  return (
    <AliceCarousel
      mouseTracking
      infinite
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls
      renderPrevButton={() => (
        <button className="absolute top-[50%] translate-y-[-50%] text-[3rem] -left-[50px]">
          〈
        </button>
      )}
      renderNextButton={() => (
        <button className="!absolute top-[50%] translate-y-[-50%] text-[3rem] -right-[50px]">
          〉
        </button>
      )}
    />
  )
}
