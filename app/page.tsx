"use client"
import { Body } from "../lib/components/layout/body/Body"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setMounted(true)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false)
  }, [])

  return mounted ? (
    <>
      <Body isMobile={isMobile} />
    </>
  ) : (
    <div className="h-screen flex items-center justify-center">Loading..</div>
  )
}
