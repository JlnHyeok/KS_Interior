import React from "react"

interface IProps {
  context: string
  bgColor?: string
  textColor?: string
  textSize?: string
  borderColor?: string
  width?: string
  height?: string
  onClick?: () => void
}

export const Button = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
      ${props.width ? `w-[${props.width}]` : "w-[140px]"} 
      ${props.height ? `h-[${props.height}]` : "h-[36px]"}
      ${props.textColor ? `text-[${props.textColor}]` : "text-[#5A4E47]"}
      ${props.textSize ? `text-[${props.textSize}]` : "text-[18px]"}
      ${props.bgColor ? `bg-[${props.bgColor}]` : "bg-white"}
        rounded-md relative NotoMediumFont `}
    >
      <span>{props.context}</span>
    </button>
  )
}
