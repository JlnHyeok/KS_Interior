"use client"
import { AnimatePresence } from "framer-motion"
import { Body } from "../lib/components/layout/body/Body"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setMounted(true)
    window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false)
  }, [])

  return mounted ? (
    <AnimatePresence>
      <Body isMobile={isMobile} />
    </AnimatePresence>
  ) : (
    <div className="h-screen flex items-center justify-center">Loading..</div>
  )
}
