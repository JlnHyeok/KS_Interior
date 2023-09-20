import React from "react"
import { ImageWrap } from "../image/ImageWrap"
import { Rating } from "../rating/Rating"

interface IProps {
  title: string
  className?: string
  style?: {
    title?: string
    content?: string
    button?: string
  }
  imgInfo: { src: string; alt: string; className?: string }
  content: string
  button?: React.ReactNode
  score?: number
  subTitle?: string
  date?: string
}

export const Card = (props: IProps) => {
  return (
    <div
      className={`hover:cursor-pointer hover:scale-105 duration-300 bg-white relative rounded-md shadow-[4px_4px_20px_0_rgba(0,0,0,0.2)] ${props.className}`}
    >
      <ImageWrap imgInfo={props.imgInfo} />
      <div className="w-full aspect-[1/0.65] mx-auto text-center flex flex-col items-center">
        {props?.subTitle && (
          <span className="NotoRegularFont text-[#7b7878] w-[85%] text-left text-xs mt-[14px]">
            [{props.subTitle}]
          </span>
        )}
        <h1
          className={`GmarketBoldFont w-[220px] mt-5 text-center text-[36px] text-ellipsis overflow-hidden whitespace-nowrap md:w-[90%] md:NotoMediumFont md:text-[1.5rem] md:mt-[3%] ${props.style?.title}`}
        >
          {props.title}
        </h1>
        <p
          className={`w-[220px] h-[100px] NotoRegularFont text-left md:text-[16px] break-all mt-[2%] m-auto text-ellipsis overflow-hidden md:w-[85%] md:h-[50%] ${props.style?.content}`}
        >
          {props.content}
        </p>
        {props.score && (
          <div className="absolute !blur-none bottom-2 w-[88%] h-[40px] flex items-center justify-between">
            <div className=" w-[60%] flex items-center">
              <span className="NotoMediumFont text-sm">별점 : </span>
              <Rating score={props.score!} />
            </div>
            <span className="NotoRegularFont text-xs text-[#999999]">
              {props.date}
            </span>
          </div>
        )}
      </div>

      {props.button && (
        <div className="flex justify-center absolute w-full bottom-6">
          {props.button}
        </div>
      )}
    </div>
  )
}
