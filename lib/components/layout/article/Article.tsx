import React from "react"
import { ImageWrap } from "../../units/image/ImageWrap"

interface IProps {
  title: string
  bgInfo: { src: string; alt: string }
  imgInfo?: { src: string; alt: string }[]
  divider?: boolean
  contents?: string
  button?: React.ReactNode
  card?: React.ReactNode[]
}

export const Article = (props: IProps) => {
  return (
    <div className="w-full relative">
      <ImageWrap imgInfo={{ src: props.bgInfo?.src, alt: props.bgInfo?.alt }} />
      <div className="absolute z-10 w-full h-[80%] top-[12%] box-border ">
        <h1 className="GmarketBoldFont text-center text-[36px]">
          {props.title}
        </h1>
        {props.divider && (
          <div className="w-[100px] h-[1px] bg-[#333333] m-auto mt-8"></div>
        )}
        {props.contents && (
          <p className="NotoMediumFont mt-[6%] text-[16px] break-all  m-auto w-[720px]">
            {props.contents}
          </p>
        )}
        {props.button && (
          <div className="flex justify-center absolute w-full bottom-4">
            {props.button}
          </div>
        )}
        <div className="mt-10 flex justify-evenly w-[80%] mx-auto h-full box-border">
          {props.card && props.card.map((card, index) => <>{card}</>)}
        </div>
      </div>
    </div>
  )
}
