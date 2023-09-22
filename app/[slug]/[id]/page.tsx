"use client"
import { MotionWrapper } from "@/lib/components/motion/motionTag"
import { usePathname } from "next/navigation"
import React from "react"

export default function page() {
  const pathname = usePathname()
  return <MotionWrapper className="h-screen">page {pathname} </MotionWrapper>
}
