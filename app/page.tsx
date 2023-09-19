"use client"
import { Body } from "../lib/components/layout/body/Body"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted ? (
    <>
      <Body />
    </>
  ) : (
    <div className="h-screen flex items-center justify-center">Loading..</div>
  )
}
