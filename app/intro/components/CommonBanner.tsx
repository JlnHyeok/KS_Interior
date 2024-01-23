import React from "react"
import { ImageWrap } from "../../../lib/components/units/image/ImageWrap"

interface IProps {
  title: string
  content: string
}

export const CommonBanner = ({ title, content }: IProps) => {
  return (
    <div className="relative w-full aspect-[4.8]">
      <ImageWrap
        imgInfo={{
          src: "/img/intro/banner.png",
          alt: "Intro Banner",
          className: "opacity-60",
        }}
        className="bg-[#000000c7]"
        innerText={{ title: title, content: content }}
      />
    </div>
  )
}
