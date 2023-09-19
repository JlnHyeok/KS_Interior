import React from "react"

interface IProps {
  context: string
  buttonTheme: string
  textSize?: string
  borderColor?: string
  width?: string
  height?: string
  arrowStyle?: string
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
        rounded-md relative NotoMediumFont hover:scale-105 duration-300`}
    >
      <span
        className={`mr-4 after:content-['〉'] ${
          props.arrowStyle
            ? props.arrowStyle
            : "after:text-[14px] after:absolute after:right-2 after:top-[8px]"
        } `}
      >
        {props.context}
      </span>
    </button>
  )
}
