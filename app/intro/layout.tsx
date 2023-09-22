"use client"
import { MotionWrapper } from "@/lib/components/motion/motionTag"
import React, { useEffect, useState } from "react"
import { CommonBanner } from "./components/CommonBanner"
import { usePathname } from "next/navigation"
import { makeTitle } from "./utils"

export default function layout({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState({ title: "", content: "" })
  const pathname = usePathname()

  useEffect(() => {
    makeTitle(pathname, setText)
  }, [pathname])
  return (
    <MotionWrapper>
      <CommonBanner title={text.title} content={text.content} />
      {children}
    </MotionWrapper>
  )
}
