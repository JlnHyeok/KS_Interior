import React from "react"
import { ImageWrap } from "../image/ImageWrap"

interface IProps {
  title: string
  context: string
  imgInfo: {
    src: string
    alt: string
  }
}

const movieSubInfo = [
  {
    title: "거실과 부엌을 이어주는 작은 공간",
    context: "Lorem ipsum dolor sit amet consectetur. Molestie scelerisque.",
    imgInfo: {
      src: "/img/movie/movie_first.svg",
      alt: "KS Interior Movie",
    },
  },
  {
    title: "균형감 있는 디자인의 네이비 톤 바탕으로 이루어진 인테리어",
    context: "Lorem ipsum dolor sit amet consectetur. Molestie scelerisque.",
    imgInfo: {
      src: "/img/movie/movie_second.svg",
      alt: "KS Interior Movie",
    },
  },
  {
    title: "부드러운 느낌을 주는 거실의 분위기를 만들어 본 인테리어",
    context: "Lorem ipsum dolor sit amet consectetur. Molestie scelerisque.",
    imgInfo: {
      src: "/img/movie/movie_third.svg",
      alt: "KS Interior Movie",
    },
  },
]

export const MovieSub = () => {
  return (
    <>
      {movieSubInfo.map((props, index) => (
        <div
          key={index + props.context}
          className="w-full flex my-auto justify-between border-b-[1px] hover:cursor-pointer hover:scale-[1.02] duration-300"
        >
          <div className="w-[32%]  ">
            <ImageWrap
              imgInfo={{
                src: props.imgInfo.src,
                alt: "KS Interior",
                className: " mr-0",
              }}
            />
          </div>
          <div className="w-[60%] mr-3 ">
            <h1 className="NotoMediumFont text-[1.2rem] w-full h-[30%] text-ellipsis overflow-hidden  whitespace-nowrap">
              {props.title}
            </h1>
            <p className="NotoLightFont break-al text-xs text-[#7b7878] h-[50%]  text-ellipsis overflow-hidden py-2 box-border">
              {props.context}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export const MovieMain = () => {
  return (
    <div className="h-full flex items-center">
      <iframe
        className="w-full aspect-[16/10]"
        src="https://www.youtube.com/embed/xGjVPFsJlEQ?si=l6yuVQti6CrOsWQ4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
