import React from "react"

interface IProps {
  context: string
  buttonTheme: string
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
      ${props.buttonTheme}
      ${props.width ? `w-[${props.width}]` : "w-[140px]"} 
      ${props.height ? `h-[${props.height}]` : "h-[36px]"}
      ${props.textSize ? `text-[${props.textSize}]` : "text-[18px]"}
        rounded-md relative NotoMediumFont`}
    >
      <span>{props.context}</span>
    </button>
  )
}
