import React from "react"

interface IProps {
  text: string
  content: string
}

export const Circle = ({ text, content }: IProps) => {
  return (
    <div className=" h-full flex flex-col justify-center gap-8 text-center relative">
      {/* Circle */}
      <div className="w-[220px] h-[220px] rounded-full bg-[#5A4E47] flex justify-center items-center">
        <div className="text-white GmarketBoldFont text-[24px] w-[180px] h-[180px] rounded-full border-[#DFD3C3] border-[3px] flex justify-center items-center">
          <span className="w-[150px] whitespace-pre-wrap text-center ">
            {text}
          </span>
        </div>
      </div>

      {/* Contents */}
      <span className="NotoMediumFont whitespace-pre-wrap text-[15px] block w-full">
        {content}
      </span>
    </div>
  )
}
