import Link from "next/link"
import React from "react"

export const Logo = ({
  logo,
  className,
}: {
  logo: string
  className?: string
}) => {
  return (
    <div
      className={`justify-center GmarketBoldFont text-center flex items-center w-[60%] text-[24px] md:w-[30%] md:justify-normal ${className}`}
    >
      <Link href="/">{logo}</Link>
    </div>
  )
}
