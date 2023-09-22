"use client"
import React, { useState } from "react"
import { Menu } from "../../units/menu/Menu"
import Link from "next/link"
import { Sidebar } from "./Sidebar"
import { Logo } from "../../units/logo/Logo"
import { menuList } from "@/lib/constants/data/menu"
import { HamburgerIcon } from "../../units/icon/HamburgerIcon"

export const Header = () => {
  const [sideBar, setSideBar] = useState(false)

  return (
    <>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      <header className="w-full h-20 fixed md:relative flex justify-center text-white bg-[#5A4E47] z-20">
        <div className="flex w-full relative justify-center md:justify-normal md:w-[80%]">
          <HamburgerIcon
            onClick={() => setSideBar(!sideBar)}
            sideBar={sideBar}
          />
          {/* LOGO */}
          <Logo logo="KS Interior" />
          <nav className="md:flex md:justify-around md:items-center box-border NotoMediumFont w-[45%] !text-[16px] relative text-center hidden ">
            {menuList.map((menu, index) => (
              <Menu
                key={menu.title + index}
                title={menu.title}
                menus={menu.menus}
                links={menu.links}
              />
            ))}
          </nav>
          <div className="md:flex md:justify-center md:items-center w-[25%] text-center hidden">
            <Link href="/login">
              <span className="text-xs ml-2">로그인</span>
            </Link>
            <span className="text-xs ml-2 mb-0">|</span>
            <Link href="#">
              <span className="text-xs ml-2">회원가입</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-20 bg-[#5A4E47] z-20 md:hidden"></div>
    </>
  )
}
