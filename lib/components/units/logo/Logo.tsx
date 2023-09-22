import Link from "next/link"
import React from "react"

export const Logo = ({ logo }: { logo: string }) => {
  return (
    <div className="justify-center  GmarketBoldFont text-center flex items-center w-[60%] text-[24px] md:w-[30%] md:justify-normal">
      <Link href="/">{logo}</Link>
    </div>
  )
}
