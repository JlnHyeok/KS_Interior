import React from "react"
import { ImageWrap } from "../image/ImageWrap"

interface IProps {
  title: string
  imgInfo: { src: string; alt: string }
  context: string
  button: React.ReactNode
}

export const Card = (props: IProps) => {
  return (
    <>
      <ImageWrap imgInfo={props.imgInfo} />
      <div className="w-full h-[140px] mx-auto  text-center ">
        <h1 className="NotoMediumFont mt-[3%] text-center text-[1.5rem]">
          {props.title}
        </h1>
        <p className="NotoRegularFont text-left text-[16px] break-all w-[88%] mt-[2%] m-auto">
          {props.context}
        </p>
      </div>
      <div className="flex justify-center absolute w-full bottom-6">
        {props.button}
      </div>
    </>
  )
}
