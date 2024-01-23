"use client"
import React from "react"
import { Circle } from "../components/Circle"
import { MotionWrapper } from "@/lib/components/motion/motionTag"

export default function page() {
  const textInfo = [
    {
      text: "상담신청 및\n 현장실측",
      content: "상담과 현장 실측을 통해 시공 범위\n 예산범위를 협의합니다.",
    },
    {
      text: "인테리어\n 컨셉논의",
      content: "고객이 원하는 컨셉을 바탕으로\n 자재와 디자인을 논의합니다.",
    },
    {
      text: "디자인선정\n 및 조율",
      content: "협의된 디자인과 자재등을 통해\n 견적서를 작성합니다.",
    },

    {
      text: "계약 및\n 공사진행",
      content: "최종 디자인 결정 후\n 계약 및 착공(A/S 12개월)",
    },
  ]

  return (
    <div className="h-[450px] w-full">
      <MotionWrapper className="flex justify-center gap-10 items-center h-[450px] w-full">
        {textInfo.map((text, index) => (
          <Circle key={index} text={text.text} content={text.content} />
        ))}
      </MotionWrapper>
    </div>
  )
}
