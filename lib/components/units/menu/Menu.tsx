"use client"
import React, { useState } from "react"
import { Dropdown, Flowbite } from "flowbite-react"
import Link from "next/link"
import { customTheme } from "./customTheme"

interface IProps {
  title: string
  setSideBar?: React.Dispatch<React.SetStateAction<boolean>>
  menus: Array<string>
  links: Array<string>
}

export const Menu = (props: IProps) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Dropdown
        size=""
        trigger="hover"
        color="none"
        className="mt-2"
        arrowIcon={false}
        label={props.title}
      >
        {props.menus?.map((menu, index) => (
          <Link
            href={props.links[index]}
            key={index}
            className="focus:outline-none"
          >
            <Dropdown.Item>{menu}</Dropdown.Item>
          </Link>
        ))}
      </Dropdown>
    </Flowbite>
  )
}

export const SpreadMenu = ({ title, menus, links, setSideBar }: IProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="w-full ">
      <div className={`w-[90%] border-b-[1px] border-white mx-auto`}>
        <div className="h-full">
          <div
            className="flex h-full justify-between items-center"
            onClick={() => setIsHover(!isHover)}
          >
            <span className="NotoMediumFont text-[18px] block">{title}</span>
            <span className="flex justify-end items-center h-[60px] w-[60px]">
              <span
                className={`bg-red-200 relative arrow ${
                  isHover
                    ? "after:rotate-[315deg] after:top-[0px]"
                    : "after:rotate-[135deg]"
                } after:duration-300`}
              ></span>
            </span>
          </div>
          <div
            className={`${
              isHover
                ? `h-[240px] opacity-100`
                : "h-0 overflow-hidden opacity-0"
            } bg-white text-black list-none duration-300`}
          >
            {menus?.map((menu, index) => (
              <Link
                href={links[index]}
                key={index}
                onClick={() => setSideBar!(false)}
              >
                <li className="flex flex-col justify-center h-12 duration-300 hover:bg-gray-100">
                  <span className="NotoMediumFont text-[16px] ml-2 text-[#5A4E47]">
                    {menu}
                  </span>
                </li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
