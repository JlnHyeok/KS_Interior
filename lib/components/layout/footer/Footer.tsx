import Image from "next/image"
import React from "react"
import { Logo } from "../../units/logo/Logo"

export const Footer = () => {
  return (
    <footer>
      <section className="relative w-full flex items-center justify-evenly bg-[#333333] h-[150px]">
        <div className="w-[25%] h-10">
          <Logo
            logo="KS INTERIOR"
            className="!w-[90%] m-auto !justify-end !text-[20px] !text-[#999999]"
          />
        </div>
        <div className="w-[50%] h-24 ">
          <div className="w-full h-full"></div>
        </div>
        <div className="w-[25%] ">Sns</div>
      </section>
    </footer>
  )
}
