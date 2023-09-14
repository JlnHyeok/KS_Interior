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
    <div className="w-[35%] h-[82%] relative bg-white rounded-md shadow-[4px_4px_20px_0_rgba(0,0,0,0.2)]">
      <ImageWrap imgInfo={props.imgInfo} />
      <div className="w-full h-[140px] mx-auto text-center ">
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
    </div>
  )
}
// box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
